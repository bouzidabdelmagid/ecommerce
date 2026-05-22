import React, { useEffect } from 'react'
import './Catogories.css'
import ModalComponent from '../components/Global/ModalComponent'
import { addcategory, deletecategory, getallcategoryaction, updatecategory } from '../../../redux/actions/categoryaction'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
const Catogories = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isModaleditOpen, setIsModalEditOpen] = React.useState(false)
  const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false)
  const categoryList = useSelector(state => state.category.categories || [])
  const dispatch = useDispatch()
  const [name, setName] = React.useState('')
  useEffect(() => {
    dispatch(getallcategoryaction()
    )
  }, [])
  const handleAddCategory = async () => {
    // Logic to add category (e.g., dispatch an action to Redux)
    console.log('Adding category:', name)
    await dispatch(addcategory({ name }))
    setIsModalOpen(false)
    await dispatch(getallcategoryaction())

  }
  const [categoryIdselected, setCategoryIdSelected] = React.useState(null)
  const handleUpdate = async (e) => {
    // Logic to update category (e.g., dispatch an action to Redux)
    try {
      e.preventDefault()
      console.log('Updating category with ID:', { id: categoryIdselected, 'New Name': name })
      await dispatch(updatecategory({ id: categoryIdselected, name }))
      setIsModalEditOpen(false)
      await dispatch(getallcategoryaction())

    } catch (error) {
      toast.error(error.message)
    }
  }
  const handleDelete = async () => {
    // Logic to delete category (e.g., dispatch an action to Redux)
    try {
      console.log('Deleting category with ID:', categoryIdselected)
      await dispatch(deletecategory(categoryIdselected))
      setIsModalDeleteOpen(false)
      await dispatch(getallcategoryaction())
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handelopeneditmodal = (id) => {
    setIsModalEditOpen(true)
    setCategoryIdSelected(id)
    console.log("the id of category to edit", id)
  }
  const handelOpenDeletModal = (id) => {
    setIsModalDeleteOpen(true)
    setCategoryIdSelected(id)
    console.log("the id of category to delete", id)
  }


  return (
    <section className="categories-page">
      <div className="categories-header">
        <div>
          <h1 className="categories-title">Manage Categories</h1>
          <p className="categories-description">Create, edit, and remove category entries for the store.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Add Category</button>
      </div>

      <div className="categories-summary">
        <div className="summary-card">
          <span className="summary-title">Total categories</span>
          <strong className="summary-value">12</strong>
        </div>
        <div className="summary-card summary-card--light">
          <span className="summary-title">Active sections</span>
          <strong className="summary-value">5</strong>
        </div>
      </div>

      <div className="categories-table-wrap">
        <table className="categories-table">
          <thead>
            <tr>
              <th>Name</th>

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categoryList.map(p => (<tr>
              <td>{p?.name}</td>

              <td className="actions-cell">
                <button className="btn-secondary" onClick={() => handelopeneditmodal(p._id)}>Edit</button>
                <button className="btn-danger" onClick={() => handelOpenDeletModal(p._id)}>Delete</button>
              </td>
            </tr>)
            )}

          </tbody>
        </table>
      </div>
      <ModalComponent title="Add Category" isOpen={isModalOpen} onclose={() => setIsModalOpen(false)}>
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input type="text" id="categoryName" placeholder="Enter category name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn-save" onClick={handleAddCategory}>Save Category</button>
          </div>
        </form>
      </ModalComponent>
      <ModalComponent title="Edit Category" isOpen={isModaleditOpen} onclose={() => setIsModalEditOpen(false)}>
        <form className="modal-form">
          <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input type="text" id="categoryName" placeholder="Enter category name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={() => setIsModalEditOpen(false)}>Cancel</button>
            <button type="submit" className="btn-save" onClick={handleUpdate}>Update Category</button>
          </div>
        </form>
      </ModalComponent>
      <ModalComponent title="Delete Category" isOpen={isModalDeleteOpen} onclose={() => setIsModalDeleteOpen(false)}>
        <p>Are you sure you want to delete this category?</p>
        <div className="modal-actions">
          <button type="button" className="btn-cancel" onClick={() => setIsModalDeleteOpen(false)}>Cancel</button>
          <button type="submit" className="btn-danger" onClick={handleDelete}>Delete Category</button>
        </div>
      </ModalComponent>
    </section>
  )
}

export default Catogories
import React, { useEffect } from 'react'
import DataTable from '../components/Global/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, getallproductsaction, updateProduct } from '../../../redux/actions/productaction'
import ModalComponent from '../components/Global/ModalComponent'
import { toast } from 'react-toastify'

const Products = () => {
  const[formData,setFormdata]=React.useState({
    name: '',
    price: '',
    description: '',
   category: '',
   image: null
  })
  const categoryList = useSelector(state => state.category.categories || [])
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const[isModaleditopen,setIsModalEditOpen]=React.useState(false)
  const[isModalDeleteOpen,setIsModalDeleteOpen]=React.useState(false)
  const dispatch = useDispatch()
  const productsState = useSelector(state => state.product.listproducts || [])
  const [productIdSelected, setProductIdSelected] = React.useState(null)
  const ProductColumns = [
    { "label": "Name", "key": "name" },
    { "label": "Image", "key": "image" },
    { "label": "Price", "key": "price" },
    { "label": "Category", "key": "category", "render": (row) => row.category?.name || '-' },
  ]
  useEffect(() => {
    dispatch(getallproductsaction())
  }, [])//pour afficher une seule fois le data
  const handleAddProduct = (e) => {
    e.preventDefault()
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('price', formData.price)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('category', formData.category)
      formDataToSend.append('image', formData.image)
        // Logic to add product (e.g., dispatch an action to Redux)
    dispatch(addProduct(formDataToSend))
    toast.success("product added successfully")
    console.log('Adding product')
    dispatch(getallproductsaction())
    setIsModalOpen(false)
    
    } catch (error) {
      toast.error("failed to add product")
    }
  
  }
  const handelOpenEditModal=(prod)=>
  {
    // Logic to open edit modal and set selected product data
    setProductIdSelected(prod._id)//pour stocker l'id du produit selectionné dans le state
    setFormdata({
        name: prod?.name || '',
        price: prod?.price || '',
        description: prod?.description || '',
        category: prod?.category?._id || '',
        image: null
    })
    setIsModalEditOpen(true)
  }
  const handleEditProduct=(e)=>
  {
    e.preventDefault()
      // Logic to edit product (e.g., dispatch an action to Redux)
     try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('price', formData.price)
      formDataToSend.append('description', formData.description)
      formDataToSend.append('category', formData.category)
     if (formData.image) {
      formDataToSend.append('image', formData.image)
    }
      console.log("id de produit séléctionné",productIdSelected)
    dispatch(updateProduct({id:productIdSelected,formdata:formDataToSend}))
    toast.success("product updated successfully")
    console.log('Editing product')
    dispatch(getallproductsaction())
    setIsModalEditOpen(false)
    } catch (error) {
      toast.error("failed to update product")
    }

  }
  const handelOpenDeleteModal=(prod)=>
  {
    // Logic to open delete modal and set selected product data
    setProductIdSelected(prod)//pour stocker l'id du produit selectionné dans le state
    setIsModalDeleteOpen(true)
  }
  const handleDeleteProduct=()=>
  {
    // Logic to delete product (e.g., dispatch an action to Redux)
    try {
      dispatch(deleteProduct(productIdSelected))
      toast.success("product deleted successfully")
      console.log('Deleting product')
      dispatch(getallproductsaction())
      setIsModalDeleteOpen(false)
    } catch (error) {
      toast.error("failed to delete product")
    }
  }


  return (
    <section className="categories-page">
      <div className="categories-header">
        <div>
          <h1 className="categories-title">Manage products</h1>
          <p className="categories-description">Create, edit, and remove product entries for the store.</p>
        </div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>Add product</button>
      </div>

      <div className="categories-summary">
        <div className="summary-card">
          <span className="summary-title">Total products</span>
          <strong className="summary-value">{productsState.length}</strong>{/* longueur de la liste des produits pour afficher le nombre total de produits */}
        </div>
        <div className="summary-card summary-card--light">
          <span className="summary-title">Active sections</span>
          <strong className="summary-value">{productsState.filter(p => p.isActive).length}</strong>
        </div>
      </div>
      <DataTable columns={ProductColumns} data={productsState} onEdit={handelOpenEditModal} onDelete={handelOpenDeleteModal} />
      <ModalComponent title="Add New Product" isOpen={isModalOpen} onclose={() => {setIsModalOpen(false)}}>
        <form className="modal-form">
          <div className="form-group">
            <input type="text" id="productName" name="name" placeholder='Product Name'  value={formData.name} onChange={(e) => setFormdata({...formData, name: e.target.value})} required />
          </div>
          <div className="form-group">

            <input type="number" id="productPrice" name="price" placeholder='Product Price'  value={formData.price} onChange={(e) => setFormdata({...formData, price: e.target.value})} required />
          </div>
          <div className="form-group">

            <input type="text" id="description" name="description" placeholder='Product Description'  value={formData.description} onChange={(e) => setFormdata({...formData, description: e.target.value})} required />
          </div>
          <div className="form-group">

            <select id="productCategory" name="productCategory" placeholder='Product Category' value={formData.category} onChange={(e) => setFormdata({...formData, category: e.target.value})} required>
              <option value="">Select a category</option>
              {categoryList?.map(cat => (
                <option key={cat?._id} value={cat?._id}>
                  {cat?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">

            <input type="file" id="productImage" name="image" placeholder='Image URL' onChange={(e) => setFormdata({...formData, image: e.target.files[0]})}  />
          </div>
          <button type="submit" className="btn-primary" onClick={handleAddProduct}>Add Product</button>
        </form>
      </ModalComponent>
      <ModalComponent title="Edit Product" isOpen={isModaleditopen} onclose={() => {setIsModalEditOpen(false)}}>
        <form className="modal-form">
          <div className="form-group">
            <input type="text" id="productName" name="name" placeholder='Product Name'  value={formData.name} onChange={(e) => setFormdata({...formData, name: e.target.value})} required />
          </div>
          <div className="form-group">

            <input type="number" id="productPrice" name="price" placeholder='Product Price'  value={formData.price} onChange={(e) => setFormdata({...formData, price: e.target.value})} required />
          </div>
          <div className="form-group">

            <input type="text" id="description" name="description" placeholder='Product Description'  value={formData.description} onChange={(e) => setFormdata({...formData, description: e.target.value})} required />
          </div>
          <div className="form-group">

            <select id="productCategory" name="productCategory" placeholder='Product Category' value={formData.category} onChange={(e) => setFormdata({...formData, category: e.target.value})} required>
              <option value="">Select a category</option>
              {categoryList?.map(cat => (
                <option key={cat?._id} value={cat?._id}>
                  {cat?.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">

            <input type="file" id="productImage" name="image" placeholder='Image URL' onChange={(e) => setFormdata({...formData, image: e.target.files[0]})}  />
          </div>
          <button type="submit" className="btn-primary" onClick={handleEditProduct}>Update Product</button>
        </form>
      </ModalComponent>
        <ModalComponent title="Delete Product" isOpen={isModalDeleteOpen} onclose={() => {setIsModalDeleteOpen(false)}}>
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this product?</p>
          <div className="delete-actions">
            <button className="btn-danger" onClick={() =>{handleDeleteProduct()}}> Delete</button>
            <button className="btn-secondary" onClick={() => setIsModalDeleteOpen(false)}>Cancel</button>
          </div>
        </div>
      </ModalComponent>

    </section>
  )
}

export default Products
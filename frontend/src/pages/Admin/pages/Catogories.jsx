import React from 'react'
import './Catogories.css'
import ModalComponent from '../components/Global/ModalComponent'

const Catogories = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <section className="categories-page">
      <div className="categories-header">
        <div>
          <p className="categories-label">Admin / Categories</p>
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
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category 1</td>
              <td>Best-selling products and seasonal items.</td>
              <td className="actions-cell">
                <button className="btn-secondary">Edit</button>
                <button className="btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ModalComponent title="Add Category" isOpen={isModalOpen} onclose={() => setIsModalOpen(false)}>
        <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
          <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input type="text" id="categoryName" placeholder="Enter category name" />
          </div>
          <div className="form-group">
            <label htmlFor="categoryDescription">Description</label>
            <textarea id="categoryDescription" placeholder="Enter category description"></textarea>
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={() => setIsModalOpen(false)}>Cancel</button>
            <button type="submit" className="btn-save">Save Category</button>
          </div>
        </form>
      </ModalComponent>

    </section>
  )
}

export default Catogories
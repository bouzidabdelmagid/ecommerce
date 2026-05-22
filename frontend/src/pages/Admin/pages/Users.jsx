import React, { useEffect } from 'react'
import DataTable from '../components/Global/DataTable'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getallusers, registerAction } from '../../../redux/actions/useraction'
import ModalComponent from '../components/Global/ModalComponent'
import { toast } from 'react-toastify'

const Users = () => {
  const userColumns = [
    { "label": "Full Name", "key": "fullName" },
    { "label": "Email", "key": "email" },
    { "label": "Country", "key": "Country" },
    { "label": "Address", "key": "address" },
    { "label": "Phone Number", "key": "phoneNumber" },
    { "label": "Role", "key": "role" },
  ]
  const [ismodalOpen, setIsModalOpen] = React.useState(false)
  const [ismodalEditOpen, setIsModalEditOpen] = React.useState(false)
  const [ismodalDeleteOpen, setIsModalDeleteOpen] = React.useState(false)
  const [userIdSelected, setUserIdSelected] = React.useState(null)
  const userData = useSelector(state => state.user.users || []) 
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    country: '',
    address: '',
    phoneNumber: '',
    password: '',
    role: 'Provider'
  })
 
  const dispatch = useDispatch()
  useEffect(() => { 
   dispatch(getallusers())
   console.log("the users from API",userData)
   },[])
  const handleAddUser = async (e) => {
    e.preventDefault()
    // Logic to add user (e.g., dispatch an action to Redux)
   try {
     await dispatch(registerAction(formData))
    setIsModalOpen(false)
     await dispatch(getallusers())
   } catch (error) {
    toast.error("failed to add user")
   }
  }
  //logic to open delete modal and set selected user id
  const handelOpenDeletModal=(id)=>
  {
    setIsModalDeleteOpen(true)
    setUserIdSelected(id)
    console.log("the id of user to delete", id)
  }
  const handleDeleteUser = async () => {
    // Logic to delete user (e.g., dispatch an action to Redux)
    try {
      console.log("the id of user to delete", userIdSelected)
      await dispatch(deleteUser(userIdSelected))
      setIsModalDeleteOpen(false)
      await dispatch(getallusers())
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <div>
      <h1>Users Management</h1>
      <p>This is the Users management page. Here you can view, edit, and delete users.</p>
      <div>
        <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
          Add New Provider
        </button>
        <DataTable columns={userColumns} data={userData} onDelete={handelOpenDeletModal} onEdit={handelOpenEditModal} />
      </div>
      <div>
        {/* Modal for adding/editing users */}
        <ModalComponent title="Add New Provider" isOpen={ismodalOpen} onclose={() => { setIsModalOpen(false) }}>
          {/* Form content for adding/editing users goes here */}
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder='Email' required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
             <div className="form-group">
              <input type="password" id="password" name="password" placeholder='Password' required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="text" id="country" name="country" placeholder='Country' required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="text" id="address" name="address" placeholder='Address' required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' required value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
            </div>
            <div className="form-group"> 
              <select id="role" name="role" required value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                <option value="Provider">Provider</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </ModalComponent>
        <ModalComponent title="delete user" isOpen={ismodalDeleteOpen} onclose={() => { setIsModalDeleteOpen(false) }}>
          <p>Are you sure you want to delete this user?</p>
          <button className="btn-danger" onClick={handleDeleteUser}>Delete</button>
          <button className="btn-secondary" onClick={() => setIsModalDeleteOpen(false)}>Cancel</button>
      
        </ModalComponent>
        <ModalComponent title="edit user" isOpen={ismodalEditOpen} onclose={() => { setIsModalEditOpen(false) }}>
          {/* Form content for adding/editing users goes here */}
          <form onSubmit={handleAddUser}>
            <div className="form-group">
              <input type="text" id="fullName" name="fullName" placeholder='Full Name' required value={formData.fullName} onChange={(e) => setFormData({...formData, fullName: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder='Email' required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            </div>
             <div className="form-group">
              <input type="password" id="password" name="password" placeholder='Password' required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="text" id="country" name="country" placeholder='Country' required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="text" id="address" name="address" placeholder='Address' required value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>
            <div className="form-group">
              <input type="text" id="phoneNumber" name="phoneNumber" placeholder='Phone Number' required value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} />
            </div>
            <div className="form-group"> 
              <select id="role" name="role" required value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})}>
                <option value="Provider">Provider</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <button type="submit" className="btn-primary">Submit</button>
          </form>
        </ModalComponent>
      </div>
    </div>
  )
}
  export default Users       

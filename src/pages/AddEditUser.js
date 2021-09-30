import React, {useEffect, useState} from 'react'
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import {useHistory, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUserStart, updateUserStart } from '../redux/actions'
import {toast} from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

const AddEditUser = () => {

    const [formValue, setFormValue] = useState(initialState)
    const [editMode, setEditMode] = useState(false)
    const {users} = useSelector(state => state.data)
    const {name, email, phone, address} = formValue
    const history = useHistory();
    const dispatch = useDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(id){
            setEditMode(true)
            const singleUser = users.find(item => item.id === Number(id))
            setFormValue({...singleUser})
        } else {
            setEditMode(false)
            setFormValue({...initialState})
        }
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && phone && address) {
            if (editMode) {
                dispatch(updateUserStart({id, formValue}))
                setEditMode(false)
                toast.success('User updated successfully')
                setTimeout(() => history.push("/"), 500)
            } else {
                dispatch(createUserStart(formValue))
                toast.success('User added successfully')
                setTimeout(() => history.push("/"), 500)
            }
        }
    }

    const onInputChange = (e) => {
        let {name, value} = e.target;
        setFormValue({...formValue, [name]:value})
    }

    return (
        <MDBValidation className="row g-3" style={{marginTop: "100px"}} novalidation="true" onSubmit={handleSubmit}>
            <p className="fs-2 fw-bold" style={{textAlign: "center"}}>{editMode ? 'Edit User' : 'Add User'}</p>
            <div style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}}>
                <MDBInput
                    value={name || ""}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Name is required"
                    invalid
                />
                <MDBInput
                    value={email || ""}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Email is required"
                    invalid
                />
                <MDBInput
                    value={phone || ""}
                    name="phone"
                    type="number"
                    onChange={onInputChange}
                    required
                    label="Phone"
                    validation="Phone is required"
                    invalid
                />
                <MDBInput
                    value={address || ""}
                    name="address"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Address"
                    validation="Address is required"
                    invalid
                />
                <br />
                <div className="col-12">
                    <MDBBtn style={{marginRight: "10px"}} type="submit">
                    {editMode ? 'Edit' : 'Add'}
                    </MDBBtn>
                    <MDBBtn onClick={() => history.push("/")} color="danger">
                        Go back
                    </MDBBtn>
                </div>
            </div>
        </MDBValidation>
    )
}

export default AddEditUser

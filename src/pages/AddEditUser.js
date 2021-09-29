import React, {useEffect, useState} from 'react'
import { MDBValidation, MDBInput, MDBBtn } from 'mdb-react-ui-kit'
import {useHistory} from 'react-router-dom'

const initialState = {
    name: "",
    email: "",
    phone: "",
    address: ""
}

const AddEditUser = () => {

    const [formValue, setFormValue] = useState(initialState)
    const {name, email, phone, address} = formValue
    const history = useHistory();
    const handleSubmit = () => {

    }

    const onInputChange = (e) => {
        let {name, value} = e.target;
        setFormValue({...formValue, [name]:value})
    }

    return (
        <MDBValidation className="row g-3" style={{marginTop: "100px"}} noValidation onSubmit={handleSubmit}>
            <p className="fs-2 fw-bold" style={{textAlign: "center"}}>Add User</p>
            <div style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}}>
                <MDBInput
                    value={name}
                    name="name"
                    type="text"
                    onChange={onInputChange}
                    required
                    label="Name"
                    validation="Name is required"
                    invalid
                />
                <MDBInput
                    value={email}
                    name="email"
                    type="email"
                    onChange={onInputChange}
                    required
                    label="Email"
                    validation="Email is required"
                    invalid
                />
                <MDBInput
                    value={phone}
                    name="phone"
                    type="number"
                    onChange={onInputChange}
                    required
                    label="Phone"
                    validation="Phone is required"
                    invalid
                />
                <MDBInput
                    value={address}
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
                        Add
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

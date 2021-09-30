import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserStart, loadUsersStart } from '../redux/actions';
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBIcon, MDBTolltip, MDBSpinner, MDBTooltip } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const dispatch = useDispatch();
    const {users, loading, error} = useSelector(state => state.data)

    useEffect(() => {
        dispatch(loadUsersStart())
    }, [])

    useEffect(() => {
       error && toast.error(error)
    }, [error])
    
    const handleDelete = (id) => {
        if(window.confirm("Are you sure, you wanted to delete that user")) {
            dispatch(deleteUserStart(id))
            toast.success("User deleted successfully")
        }
    }

    return (
        
        <div className="container" style={{marginTop: "150px"}}>
            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </MDBTableHead>
                {users && users.map((item, index) => (
                    <MDBTableBody key={index}>
                        <tr>
                            <td scope="row">{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.address}</td>
                            <td>
                                <MDBBtn className="m-1" tag="a" color="none" onClick={() => handleDelete(item.id)}>
                                    <MDBTooltip title="delete" tag="a">
                                        <MDBIcon fas icon="trash" style={{color: "#dd4b39"}} size="lg" />
                                    </MDBTooltip>
                                </MDBBtn>{ " " }
                                <Link to={`/editUser/${item.id}`}>
                                    <MDBTooltip title="edit" tag="a">
                                        <MDBIcon fas icon="pen" style={{color: "#55acee", marginBottom: "10px"}} size="lg" />
                                    </MDBTooltip>
                                </Link>{ " " }
                                <Link to={`/userInfo/${item.id}`}>
                                    <MDBTooltip title="view" tag="a">
                                        <MDBIcon fas icon="eye" style={{color: "#3b5998", marginBottom: "10px"}} size="lg" />
                                    </MDBTooltip>
                                </Link>
                            </td>
                        </tr>
                    </MDBTableBody>
                ))}
            </MDBTable>
        </div>
    )
}

export default Home

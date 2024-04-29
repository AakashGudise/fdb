import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export function UserCrud(){
    const [users , setUsers] = useState([])


    useEffect(() =>{
        axios.get('http://localhost:5001/')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:5001/deleteUser/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }


    return(
        <>
          <div className="d-flex justify-conternt-center align-item-center">
          <div className="d-flex justify-conternt-center align-item-center">
            <table className="table">
            <Link to='/create' className='btn btn-success'>Add+</Link>

                <thead>
                    <th>Name</th>
                    <th>Mail id</th>
                    <th>Age</th>
                    <th>Password</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        users.map((user,index) =>{
                            return <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.password}</td>
                                <td>
                                <Link to='/create' className='btn btn-success'>Add+</Link>
                                   <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>

                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                </td>
                                {/* <td>
                                        <button className="btn btn-primary ">Read</button>
                                        <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                        <NavLink to={`/update/${user._id}`} className='btn btn-success'>Update</NavLink>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td> */}
                            </tr>
                        })
                    }
                </tbody>
            </table>
         </div>
          </div>
        </>
    )
}
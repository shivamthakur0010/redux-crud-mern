import React from 'react'
import { Link } from 'react-router-dom'
import nouser from '../images/nouser.png'
const NoUser = () => {
  return (
    <>
    <div className="container pt-5">
        <div className="row justify-content-center">
            <img src={nouser} alt="no user" className='img-fluid w-25'/>
        </div>
        <div className="row">
            <p className='text-center text-capitalize lead'>No Users there. Add a User by clicking Add user Button</p>
            <div className="col-12 text-center">
            <Link to='/adduser' className='text-capitalize lead text-decoration-none btn btn-outline-success'>Add User</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default NoUser
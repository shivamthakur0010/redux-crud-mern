import React, { useState, useEffect } from "react";
import { deleteSingleUser, fetchUsers } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import Spinner from "./Spinner";
import NoUser from "./NoUser";
import { BsFillEyeFill } from 'react-icons/bs';
import { AiTwotoneEdit,AiFillDelete } from 'react-icons/ai';
const UserTable = () => {
  const {isLoading} = useSelector(store=>store.users);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(fetchUsers());
      const Data = await res.payload;
      setData(Data);
    };
    fetchData();
  }, [dispatch]);

  const deleteUser=(id)=>{
    dispatch(deleteSingleUser(id));
    const newData = data.filter((val)=>{
      return val._id!== id;
    })
    console.log(newData);
    setData(newData);
    alert('user deleted !');

  }
if (isLoading) {
  return <Spinner/>
}
if (data.length <1) {
  return <NoUser/>
}
  return (
    <>
    <div className="container table-responsive">
      <table className="table table-hover">
        <thead>
          <tr className='bg-dark text-white'>
            <th scope="col">Sr.No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">School</th>
            <th scope="col">College</th>
            <th scope="col">Date/Time</th>
            <th scope="col" colSpan='3'></th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, i) => {
            return (
              <tr key={val._id}>
                <th scope="row">{i+1}</th>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.phone}</td>
                <td>{val.school}</td>
                <td>{val.college}</td>
                <td><Moment format='MMMM Do YYYY, h:mm:ss a'>{val.date}</Moment></td>
                <td><Link to={`/userdetail/${val._id}`} className='btn btn-warning btn-sm' data-bs-toggle="tooltip" data-bs-placement="bottom" title="View User"><BsFillEyeFill className="text-white"/></Link></td>
                <td><Link to={`/edit/${val._id}`} className='btn btn-success btn-sm' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Edit User"><AiTwotoneEdit/></Link></td>
                <td><button className='btn btn-danger btn-sm' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Delete User" onClick={()=> deleteUser(val._id)}><AiFillDelete/></button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default UserTable;

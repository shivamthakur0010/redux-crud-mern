import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { singleUser } from "../features/userSlice";
import { Link, useParams } from "react-router-dom";
import Moment from 'react-moment';
import avatar from '../images/avatar.png'
import Spinner from './Spinner';

const UserDetail = () => {
  const isLoading = useSelector(store=> store.users.isLoading);
  const {id} = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    const fetchData =async () =>{
      const res = await dispatch(singleUser(id));
      const data = await res.payload;
      setUser(data);
    }
    fetchData();
  },[dispatch, id]);
if (isLoading) {
  return <Spinner/>
}
  return (
    <>
      <div className="container">
        <div className="card mt-5 m-auto text-white bg-dark" style={{"max-width": "60em"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={avatar} className="img-fluid h-100 rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-center text-uppercase">Detail Card</h5>
                <p className="card-text text-capitalize">
                  name : {user.name}
                </p>
                <p className="card-text">
                  Email : {user.email}
                </p>
                <p className="card-text text-capitalize">
                  phone : {user.phone}
                </p>
                <p className="card-text text-capitalize">
                  school : {user.school}
                </p>
                <p className="card-text text-capitalize">
                  college : {user.college}
                </p>
                <p className="card-text">
                  <small className="text-muted"><Moment format='MMMM Do YYYY, h:mm:ss a'>{user.date}</Moment></small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <Link to='/' className='btn btn-outline-danger'>Go Back</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;

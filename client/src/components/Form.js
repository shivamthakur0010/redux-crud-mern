import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postUser } from "../features/userSlice";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        school:'',
        college:'',
    });
    const {name,email,phone,school, college} = formData;
    const onChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const data={name,email,phone,school,college};
        dispatch(postUser(data));
        navigate('/');
    }
  return (
    <>
      <div className="container">
        <div className="row">
        <p className='h1 text-center text-uppercase'>add details</p>
        </div>
        <div className="row mb-3">
            <div className="col">
            <Link to='/' className='btn btn-secondary'>Go Back</Link>
            </div>
        </div>
        <div className="row">
        <form onSubmit={e=>onSubmit(e)}>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your Full Name"
              name='name'
              value={name}
              onChange={e=>onChange(e)}
            />
            <label htmlFor="name">Your Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your Email"
              name='email'
              value={email}
              onChange={e=>onChange(e)}
            />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Your Phone Number"
              name='phone'
              value={phone}
              onChange={e=>onChange(e)}
            />
            <label htmlFor="phone">Your Phone Number</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="school"
              placeholder="Your School"
              name='school'
              value={school}
              onChange={e=>onChange(e)}
            />
            <label htmlFor="school">Your School</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="college"
              placeholder="Your College"
              name='college'
              value={college}
              onChange={e=>onChange(e)}
            />
            <label htmlFor="college">Your College</label>
          </div>
          <button type="submit" className="btn btn-success d-block form-control">Submit</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Form;

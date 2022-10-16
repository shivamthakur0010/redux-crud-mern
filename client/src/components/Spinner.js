import React from 'react'
import img from '../images/spinner.gif';
const Spinner = () => {
  return (
    <>
    <div className="container">
      <div className="row justify-content-center">
      <img src={img} alt="spinner" className='img-fluid w-25 mt-5' />
      </div>
    </div>
    </>
  )
}

export default Spinner;
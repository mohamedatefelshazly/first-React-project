// import React from 'react'
import poert1 from "../../../assets/poert1.png"
import poert2 from "../../../assets/port2.png"
import poert3 from "../../../assets/port3.png"

export default function Portfolio() {
  return (
    <section className='text-center p-3'>
      <h1>Portofolio Section</h1>
      <div className="">
        <i className="fa-solid fa-star mx-3 position-relative bl-icon" ></i>
      </div>
      <div className="row container mx-auto g-5 p-3">
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert1} alt="po1" />
            <div className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert2} alt="po2" />
            <div className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert3} alt="po3" />
            <div className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert1} alt="po1" />
            <div className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert2} alt="po2" />
            <div className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="position-relative">
            <img className='img-fluid rounded-3' src={poert3} alt="po3" />
            <div className="cover rounded-2 position-absolute w-100 h-100 start-0 top-0 d-flex justify-content-center align align-items-center">
              <i className="fa-solid fa-plus fa-6x text-white"></i>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

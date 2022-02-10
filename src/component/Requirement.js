import React from 'react';
import './Requirement.css'

export default function Requirement() {
  return (
    <>
      <div className="container">
        <div className="page">
          <div className="first">
            <h3>What kind of space will guests have?</h3>

          </div>

          <div className="second">
            <button className='btn btn-size btn-outline-primary'>AN ENRIRE PLACE</button>
            <br /> <br />
            <button className='btn btn-size btn-outline-primary btn-block'>A PRIVATE ROOM</button>
            <br /><br />
            <button className='btn btn-size btn-outline-primary'>A SHARED ROOM</button>

            <div className='innerbtn'>
              <button className='btn  btn-primary'>BACK</button>
              <button className='btn btn-align btn-primary'>NEXT</button>

            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="page">
          <div className="first">
            <h3>Can you be specific about the place?</h3>

          </div><br />

          <div className="second">
            <input type="text" placeholder='Flat Number' className='btn-size' />
            <br /> <br />
            <input type="text" placeholder='Street' className='btn-size' />
            <br /><br />
            <input type="text" placeholder='city' className='btn-size' />
            <br /><br />
            <input type="text" placeholder='state' className='btn-size' />

            <div className='innerbtn'>
              <button className='btn  btn-primary'>BACK</button>
              <button className='btn btn-align btn-primary'>NEXT</button>

            </div>
          </div>
        </div>


      </div>

      
      <div className="container">
        <div className="page">
          <div className="first">
            <h3>Are there any kind of restriction in your space?</h3>

          </div><br />

          <div className="second2">
            <label htmlFor="same">Please write your requirement:</label>
            <textarea name="" id="same" cols="30" rows="10" className='btn-sizes'></textarea>
            <div className='innerbtn'>
              <button className='btn  btn-primary'>BACK</button>
              <button className='btn btn-align btn-primary'>Submit</button>

            </div>
          </div>
        </div>


      </div>
      




    </>
  );
}

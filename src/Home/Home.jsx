import React from 'react'
import './Home.css'
import config from './includes/configuration.json'

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <h2 className='my-3 text-center'> Login</h2>
        {
          config?.map(({ label, type }, indx) => {
            return <div key={`conf_${indx}`} className="row mb-3">
              <div className="col-sm-5 text-end">
                <b>{label}</b>
              </div>
              <div className='col-sm-3'>
                <input type={type} className='form-control' />
              </div>
            </div>
          })
        }

        <div className="row">
          <div className="offset-sm-5 col-sm-7">
            <button className='btn btn-primary'>Login</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home

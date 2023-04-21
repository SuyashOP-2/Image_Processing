import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './AdminControl.css'

function AdminControl() {
  return (
    <>
      <Navbar />
      <div className="my-3 container">
        <div className="sdrop">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Choose Subject
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Data science</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter the PO's..." />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Enter the CO's..." />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminControl
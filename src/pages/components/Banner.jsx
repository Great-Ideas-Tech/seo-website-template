import React from 'react'

function Banner({heading,page}) {
  return (
    <div className="container">
  <div className="page-banner">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-md-6">
        <nav aria-label="Breadcrumb">
          <ul className="breadcrumb justify-content-center py-0 bg-transparent">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">{page}</li>
          </ul>
        </nav>
        <h1 className="text-center">{heading}</h1>
      </div>
    </div>
  </div>
</div>

  )
}

export default Banner
import React from 'react'

const Navbar = () => {
  return (
    <>
    {/* fixed-top */}
    <nav className="navbar mb-4 p-4  bg-blue-200 ">
  <div className="container-fluid p-0">
    <img className='w-40' src="https://spree-shopping-mall-demo.herokuapp.com/assets/logo/shopping_mall_logo-2a988046201584ce274e4f6ea3515492b789e39578ac500e8c3c22fe444270ab.png" alt="" />
    <form className="d-flex" role="search">
      <input
        className=" me-2 col-sm-10 w-64 rounded"
        type="search"
        placeholder="Search your favourite item"
        aria-label="Search"
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  </div>
</nav>


    </>
  )
}

export default Navbar
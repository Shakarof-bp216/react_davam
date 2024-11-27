import React from 'react'
import './index.css';

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <p className='mylogo'><img src="https://demo-kalles-4-1.myshopify.com/cdn/shop/files/kalles_babcb241-47cc-4352-a0ae-1458bbff9dcc.png?v=1652178358&width=95" alt="" /></p>
        <ul className='nav_text '>
          <li>Demo</li>
          <li>Shop</li>
          <li>Product</li>
          <li>Sale</li>
          <li>Pages</li>
          <li>LookBook</li>
          <li>Blog</li>
          <li>Buy Theme</li>
        </ul>
        <div className='icon_contanier'>
          <p><i className="fa-solid fa-magnifying-glass"></i></p>
          <p><i className="fa-solid fa-user"></i></p>
          <p><i className="fa-regular fa-heart"></i></p>
          <p><i className="fa-solid fa-cart-shopping"></i></p>
        </div>
      </nav>
    </>
  )
}

export default Navbar
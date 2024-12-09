import React from "react"
// import {Link} from 'react-router-dom'

const NavComp = (props)=> {
    return (
        <div>
             <h2>This  is NAV Component</h2>
            <Link to="HomeComp" className="btn btn-outline-primary btn-sm">Home</Link>
            <Link to="ProductsComp" className="btn btn-outline-secondary btn-sm">Products</Link>
            <Link to="ContactComp" className="btn btn-outline-warning btn-sm">Contact</Link>
            <Link to="AboutComp" className="btn btn-outline-success btn-sm">About</Link>
        </div>
    )
}
export default NavComp;
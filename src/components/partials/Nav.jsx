import React from "react";
import axios from "axios";
import $ from "jquery";
import Swal from 'sweetalert2';
import { useState } from "react";
const Nav = () => {
    const [errors , setErrors] =  useState([]);
    const handleLogout = () => { 
        Swal.fire({
            title: 'Are you sure?',
            text: "You Will Be Logged out !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, logout!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.post('http://localhost:8000/api/logout')
                .then(res => {
                    localStorage.removeItem('email')
                    localStorage.removeItem('name')
                    localStorage.removeItem('phone')
                    localStorage.removeItem('photo')
                    localStorage.removeItem('token')
                    window.location.reload()
                }).catch(errors => {
                    if (errors.response.status == 404){
                        
                    }
                })
            }
          })
    }
    const handleSidebar = () => {
        $('body').toggleClass('sb-sidenav-toggled')
    }
     
    
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-theme">
     
        <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
      
        <button  onClick={handleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
       
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
            <div className="input-group">
                <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
            </div>
        </form>
       
        <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4 ms-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">Settings</a></li>
                    <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button  onClick={handleLogout} className="dropdown-item" >Logout</button></li>
                </ul>
            </li>
        </ul>
    </nav>
    )
}

export default Nav ;
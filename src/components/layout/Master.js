import React from "react";
import { Outlet } from "react-router-dom";


const Master = ()=> {
    return (
        <>
         <Nav /> 
        <div id="layoutSidenav">
            <Sidebar />
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid px-4">
                      <Outlet />
                       
                    </div>
                </main>
                <Footer />
            </div>
        </div>
        </>
    )
}

export default Master;
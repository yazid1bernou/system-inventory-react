import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Master from "../layout/Master";
import Users from '../modules/Users';
import Dashboard from '../modules/Dashboard';
const ProjectRouter = createBrowserRouter([ 
    {
        path : '/' ,
        element : <Master /> ,
        children : [
            {
              path : '/' ,
              element : <Dashboard /> ,
              
            } ,
            {
              path : '/users' ,
              element : <Users />
            }
        ]
    } ,
 
])

export default ProjectRouter ;
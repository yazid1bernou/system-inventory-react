import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Master from "../layout/Master";
const ProjectRouter = createBrowserRouter([ 
    {
        path : '/' ,
        element : <Master />
    }
])

export default ProjectRouter ;
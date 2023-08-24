import React ,{ useState , useEffect} from "react";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.bundle.min" ;
import "./assets/css/style.scss";
import { RouterProvider } from "react-router-dom";
import ProjectRouter from "./components/router/ProjectRouter";
import PublicRouter from "./components/router/PublicRouter";


function App() {

  
  const [auth , authSet] =  useState(false); 
   
  useEffect(() => {
      if (localStorage.token != undefined) {
          authSet(true)
      }
  } , [])
  return (
    <>
    {auth ? 
    <RouterProvider router={ProjectRouter} /> :
    <RouterProvider router={PublicRouter}/>

    }
      
    </>
  );
}

export default App;

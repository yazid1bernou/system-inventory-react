import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css" ;
import "bootstrap/dist/js/bootstrap.bundle.min" ;
import "./assets/css/style.scss";
import { RouterProvider } from "react-router-dom";
import ProjectRouter from "./components/router/ProjectRouter";
function App() {
  return (
    <>
      <RouterProvider router={ProjectRouter} />
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Pagenotfound from "./pages/Pagenotfound";
import Medicine from "./pages/Medicine";
import Doctor from "./pages/Doctor";
import Labtest from "./pages/Labtest";
import Contact from "./pages/Contactus";
import Register from "./pages/Auth/Register";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";
import Doctorlogin from "./pages/Doctorlogin";
import Doctorreg from "./pages/Doctorreg";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Homepage />}/>
        <Route path = "/register" element= {<Register/>}/>
        <Route path = "/login" element= {<Login />}/>
        <Route path = "/aboutus" element= {<Aboutus />}/>
        <Route path = "*" element= {<Pagenotfound />}/>
        <Route path = "/medicine" element= {<Medicine />}/>
        <Route path = "/doctor" element= {<Doctor />}/>
        <Route path = "/labtests" element= {<Labtest />}/>
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/doctorlogin" element={<Doctorlogin />} />
        <Route path = "/doctorreg" element={<Doctorreg />} />
      </Routes>
    </>
  );
}

export default App;

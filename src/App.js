import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/settings/settings";
import Login from "./login/Login";
import Register from "./login/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
function App() {
    const {user} = useContext(Context);

  return ( 
    <Router>
    <TopBar />
    <Routes>
        <Route path='/' element={user?<Home/>:<Register/>} />
        <Route path='/Write' element={user?<Write/>:<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/settings' element={user?<Settings/>:<Register/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/post/:postId' element={<Single/>} />

      </Routes>
  </Router>
   
  );
}

export default App;

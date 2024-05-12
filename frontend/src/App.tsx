import './App.css'
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Home from "./components/home/Home.tsx";
import {Navigate, Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import {useAuthContext} from "./contex/AuthContext.tsx";

function App() {
const {authUser}=useAuthContext()

    return (
        <div className={'p-4 h-screen flex items-center justify-center'}>
            <Routes>
                <Route path="/"  element={authUser?<Home/>:<Navigate to={'/login'}/>}/>
                <Route path="/login"  element={authUser? <Navigate to={'/'}/>:<Login/>}/>
                <Route path="/signup"  element={authUser? <Navigate to={'/'}/>:<Signup/>}/>
            </Routes>
            <Toaster/>
        </div>
    )
}

export default App

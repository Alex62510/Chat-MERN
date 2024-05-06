import './App.css'
import Login from "./components/login/Login.tsx";
import Signup from "./components/signup/Signup.tsx";
import Home from "./components/home/Home.tsx";

function App() {


    return (
        <div className={'p-4 h-screen flex items-center justify-center'}>
            <Home/>
        </div>
    )
}

export default App

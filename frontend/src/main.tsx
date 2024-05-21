import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AuthContextProvider} from "./contex/AuthContext.tsx";
import {SocketContextProvider} from "./contex/SocketContext.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <AuthContextProvider>
            <SocketContextProvider>
                <App/>
            </SocketContextProvider>
        </AuthContextProvider>
    </BrowserRouter>
)

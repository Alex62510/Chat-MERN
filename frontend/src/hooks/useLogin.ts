import {useState} from "react";
import toast from "react-hot-toast";
import {useAuthContext} from "../contex/AuthContext.tsx";

interface SignupData {
    username: string;
    password: string;
}

const handleInputErrors = ({ username, password}:SignupData) => {
    if (!username || !password ) {
        toast.error('Please fill all fields')
        return false
    }
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters long')
        return false
    }
    return true
}

const UseLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser}=useAuthContext()

    const login = async (username: string, password: string) => {
        const success = handleInputErrors({
            username,
            password,
        })
        if (!success) {
            return
        }
        setLoading(true)
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username,
                    password,
                })
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem('chat-user',JSON.stringify(data))
            setAuthUser(data)

        } catch (e) {
            toast.error((e as Error).message)
        } finally {
            setLoading(false)
        }
    }
    return {loading,login}
};

export default UseLogin;
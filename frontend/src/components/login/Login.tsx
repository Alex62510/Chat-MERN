import {Link} from "react-router-dom";
import {FormEvent, useState} from "react";
import useLogin from "../../hooks/useLogin.ts";

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login,loading}=useLogin()

    const handleSubmit=async (e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await login(username,password)
    }

    return (
        <div className={'flex flex-col items-center justify-center min-w-96 mx-auto'}>
            <div
                className={'w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'}>
                <h1 className={'text-3xl font-semibold text-center text-gray-100'}>Login
                    <span className={'text-blue-500'}> ChatApp</span>
                </h1>
                <form className={''} onSubmit={handleSubmit}>
                    <div className={''}>
                        <label className={'label p-2 '}>
                            <span className={'text-base label-text text-gray-300 '}>
                                 Username
                            </span>
                        </label>
                        <input type="text" placeholder={'Enter username'}
                               className={'w-full input input-bordered h-10'}
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className={''}>
                        <label className={'label p-2 '}>
                            <span className={'text-base label-text text-gray-300 '}>
                                 Password
                            </span>
                        </label>
                        <input type="password" placeholder={'Enter password'}
                               className={'w-full input input-bordered h-10'}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Link to="/signup"
                          className={'text-gray-300 text-sm hover:underline hover:text-blue-500 mt-2 inline-block'}>
                        {"Don't"} have an account?
                    </Link>
                    <div>
                        <button disabled={loading}
                            className={'btn btn-block btn-sm mt-2 hover:opacity-70 '}>{loading?<span className={'loading loading-spinner'}></span>:"Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
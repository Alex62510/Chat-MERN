import GenderCheckBox from "./GenderCheckBox.tsx";

const Signup = () => {
    return (
        <div className={'flex flex-col items-center justify-center min-w-96 mx-auto'}>
            <div
                className={'w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'}>
                <h1 className={'text-3xl font-semibold text-center text-gray-100'}>Sign Up
                    <span className={'text-blue-500'}> ChatApp</span>
                </h1>
                <form className={''}>
                    <div className={''}>
                        <label className={'label p-2 '}>
                            <span className={'text-base label-text text-gray-300 '}>
                                Full name
                            </span>
                        </label>
                        <input type="text" placeholder={'Enter full name'}
                               className={'w-full input input-bordered h-10'}/>
                    </div>
                    <div className={''}>
                        <label className={'label p-2 '}>
                            <span className={'text-base label-text text-gray-300 '}>
                                Username
                            </span>
                        </label>
                        <input type="text" placeholder={'Enter Username'}
                               className={'w-full input input-bordered h-10'}/>
                    </div>
                    <div className={''}>
                        <label className={'label p-2 '}>
                            <span className={'text-base label-text text-gray-300 '}>
                                 Password
                            </span>
                        </label>
                        <input type="password" placeholder={'Enter password'}
                               className={'w-full input input-bordered h-10'}/>
                    </div>
                    <div className={'pb-2'}>
                        <label className={'label p-2 '}>
                            <span className={'text-base label-text text-gray-300 '}>
                                 Confirm Password
                            </span>
                        </label>
                        <input type="password" placeholder={'Confirm password'}
                               className={'w-full input input-bordered h-10'}/>
                    </div>
                    <GenderCheckBox/>
                    <a href="#"
                       className={'text-gray-300 text-sm hover:underline hover:text-blue-500 mt-2 inline-block'}>
                       Already have an account?
                    </a>
                    <div className={''}>
                        <button
                            className={'btn btn-block btn-sm mt-2 hover:opacity-70 '}>Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
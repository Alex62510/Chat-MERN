import {BiLogOut} from "@react-icons/all-files/bi/BiLogOut";
import useLogout from "../../hooks/useLogout.ts";


const LogoutButton = () => {
    const {logout, loading} = useLogout()
    return (
        <div className={'scale-150'}>
            {!loading ? (<BiLogOut
                className={'w-6 h-6 text-white cursor-pointer hover:text-blue-500 '} onClick={logout}/>): (<span className={'loading loading-spinner'}></span>)}
        </div>
    );
};

export default LogoutButton;
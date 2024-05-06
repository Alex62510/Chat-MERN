import {BiLogOut} from "@react-icons/all-files/bi/BiLogOut";


const LogoutButton = () => {
    return (
        <div className={'mt-auto'}>
            <BiLogOut className={'w-6 h-6 text-white cursor-pointer hover:text-gray-500'} />
        </div>
    );
};

export default LogoutButton;
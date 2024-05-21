import {TiMessages} from "@react-icons/all-files/ti/TiMessages";
import {useAuthContext} from "../../contex/AuthContext.tsx";

const NoChatSelected = () => {
    const {authUser}=useAuthContext()

    return (
        <div className={'flex items-center justify-center w-full h-full'}>
            <div
                className={'px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'}>
                <p>Welcome <span className={'text-blue-500'}>{authUser?.fullName}</span></p>
                <p className={"sm:text-lg md:text-xl text-gray-300 font-medium"}>Select a chat to start messaging!</p>
                <TiMessages className={'text-3xl md:text-6xl text-center text-blue-500'} />
            </div>
        </div>
    );
};

export default NoChatSelected;
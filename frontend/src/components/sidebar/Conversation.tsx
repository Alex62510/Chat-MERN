import {ConversationType} from "../../types/type.ts";

type Props={
    conversation:ConversationType
}

const Conversation = ({conversation}:Props) => {
    return (
        <>
            <div
                className={'flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'}>
                <div className={'avatar online'}>
                    <div className={'w-12 rounded-full'}>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgubqzveGfonqnt4XHQEuglmkeHwfzfSInQ&s"
                            alt="user avatar"/>
                    </div>
                </div>
                <div className={'flex flex-col flex-1'}>
                    <div className={'flex gap-3 justify-between'}>
                        <p className={'font-bold text-gray-200'}> User Name</p>
                        <span className={'text-xl'}>emo</span>
                    </div>
                </div>
            </div>
            <div className={'divider my-0 py-0 h-1'}/>
        </>
    );
};

export default Conversation;
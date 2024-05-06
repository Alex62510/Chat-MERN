

const Message = () => {
    return (
        <div className={'chat chat-end'}>
            <div className={'chat-image avatar'}>
                <div className={'w-10 rounded-full'}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBgubqzveGfonqnt4XHQEuglmkeHwfzfSInQ&s"
                        alt="user avatar"/>
                </div>
            </div>
            <div className={'chat-bubble text-white bg-blue-500'}>Hi! What upp?</div>
            <div className={'chat-footer text-xs opacity-50 flex gap-1 items-center'}>Hi! What upp?</div>

        </div>
    );
};

export default Message;
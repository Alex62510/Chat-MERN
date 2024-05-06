import SearchInput from "./SearchInput.tsx";
import Conversation from "./Conversation.tsx";
import LogoutButton from "./LogoutButton.tsx";

const Sidebar = () => {
    return (
        <div>
            <SearchInput/>
            <div className={'divider px-3'}></div>
            <Conversation/>
            <LogoutButton/>
        </div>
    );
};

export default Sidebar;
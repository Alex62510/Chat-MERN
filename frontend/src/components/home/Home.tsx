import Sidebar from "../sidebar/Sidebar.tsx";
import MessageContainer from "../messageContainer/MessageContainer.tsx";


const Home = () => {

    return (
        <div className={` sm:flex md:flex  sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0`}>
           <Sidebar/>
            <MessageContainer/>
        </div>
    );
};

export default Home;
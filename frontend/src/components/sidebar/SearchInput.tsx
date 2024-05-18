import {FaSearch} from "@react-icons/all-files/fa/FaSearch";
import {FormEvent, useState} from "react";
import useConversation from "../../store/useConversation.ts";
import useGetConversations from "../../hooks/useGetConversations.ts";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation()
    const {conversations} = useGetConversations()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!search) return
        if (search.length < 3) {
            return toast.error("Search term must be at least 3 characters")
        }
       const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation)
            setSearch('')
        } else {toast("No such user found. Please try again.")}
    }

    return (
        <div>
            <form className={'flex items-center gap-2 justify-center'}
                  onSubmit={handleSubmit}>
                <input type="text" placeholder={'Search...'} value={search}
                       onChange={e => setSearch(e.target.value)}
                       className={'input input-bordered rounded-full'}/>
                <button type={'submit'}
                        className={'btn btn-circle bg-sky-500 text-white'}>

                    <FaSearch className={'w-6 h-6 outline-none'}/>
                </button>
            </form>
        </div>
    );
};

export default SearchInput;

import {FaSearch} from "@react-icons/all-files/fa/FaSearch";

const SearchInput = () => {
    return (
        <div>
            <form className={'flex items-center gap-2 justify-center'}>
                <input type="text" placeholder={'Search...'} className={'input input-bordered rounded-full'}/>
                <button type={'submit'} className={'btn btn-circle bg-sky-500 text-white'}>

                    <FaSearch  className={'w-6 h-6 outline-none'} />
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
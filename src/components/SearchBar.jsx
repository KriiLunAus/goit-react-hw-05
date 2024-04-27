import css from "./SearchBar.module.css"
import { TfiSearch } from "react-icons/tfi";

const SearchBar = ({ onSubmit }) => {

    const handleSubmit = evt => {

        evt.preventDefault();
        
        const form = evt.target;
        const inputValue = form.elements.search.value.trim();

        if (inputValue !== "") {
            onSubmit({
                query: inputValue,
            })
            
        } else {
            return (<><p>type something</p></>)
        }

        form.reset();


    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input type="text" name="search" placeholder="Find movie" />
          
         <button type="submit" ><TfiSearch size={30}/>  </button>
    </form>
)
}

export default SearchBar;

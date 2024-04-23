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
                return(<><p>type something</p></>)
        }

        form.reset();


    }

    return (
     <form onSubmit={handleSubmit}>
         <input type="text" name="search" />       
         <button type="submit" >Search</button>
    </form>
)
}

export default SearchBar;

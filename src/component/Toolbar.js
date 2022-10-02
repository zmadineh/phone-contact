import {FaHeart, FaRegHeart, FaUserPlus} from "react-icons/fa";
import SearchBox from "./SearchBox";

const Toolbar = ({contactFilter, searchFavEnable, favouriteFilter, setForm, setFormStatus, lastId, setShowForm}) => {

    const handleAddIcon = () => {
        setShowForm(true)
        setForm({id: lastId+1, name: '', family: '', age: '', gender: 'female', country: '', city: '', number:'', email: '', image: '', favourite: false})
        setFormStatus('Add')
    }
    return (
        <div className='toolbar'>
            <SearchBox contactFilter={contactFilter} />
            <h2 style={{fontSize:'25px', color: '#a1a1a1', margin: '0 10px'}}>Contacts</h2>
            <div className={'toolbarIcon-container'}>
                {searchFavEnable ? <FaHeart className={'toolbarFav_icon'} style={{color: 'red'}} onClick={favouriteFilter} /> :
                    <FaRegHeart className={'toolbarFav_icon'} style={{color: '#a1a1a1'}} onClick={favouriteFilter}/> }
                <FaUserPlus className={'toolbar-addUser'} onClick={handleAddIcon}/>
            </div>
        </div>
    )
}

export default Toolbar;
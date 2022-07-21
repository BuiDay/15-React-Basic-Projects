import React, {useState} from 'react';
import { FaSearch } from 'react-icons/fa';


const Navbar = (prop,{handleSearch}) => {
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();   
    }

    return (
        <nav>
            <div className="container nav__container" >
                <div className='nav__brand'>
                    <a href="index.html"><h4>Movies</h4></a>
                </div>
                <div className="nav__menu">
                    <div className='nav__start'>
                        <div className='nav__link'><a href="index.html">Phim hot</a></div>
                        <div className='nav__link'><a href="index.html">Phim lẻ</a></div>
                        <div className='nav__link'><a href="index.html">Phim bộ</a></div>
                        <div className='nav__link'><a href="index.html">Phim mới</a></div>
                    </div>
                    <div className='nav__end'>
                        <form className='search' onSubmit = {handleSubmit}>
                            <input type="search" placeholder='search' onChange = {(e) => {setName(e.target.value); handleSearch()}  }/>
                            <button type= "submit" className='search-icon' onClick={()=>prop.setValue(name)}><FaSearch /></button>
                        </form>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import { useState } from 'react';
function Header(props)
{
    const [value , setValue] = useState('');
    function handleAdd() {
        const show  = {id: Math.floor((Math.random() * 100)) , name: value};
        props.addShow(show);
    }
    return(
        <header>
            <h2>My watch list</h2>

<div>
    <input type='text' placeholder='show me!' onChange={(e)=>setValue(e.target.value)}>


    </input>
    <button className='Add' onClick={handleAdd}> Add

    </button>
    </div>        </header>
    );
}
export default Header;
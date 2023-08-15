import { FaTrashAlt } from 'react-icons/fa'

const Content = ({ items, handleCheck, handleDelete }) => {

    return !items.length 
    ? ( <main> <p style={{ marginTop: '2rem' }}>Your list is empty.</p> </main> ) 
    : (
        <main>
            {/* maps needs to have a key attribute with a value in react */}
            <ul>{items.map(item => (
                <li className="item" key={item.id}>
                    <input 
                        type="checkbox" 
                        onChange={() => handleCheck(item.id)}
                        checked={item.checked} 
                    />
                    <label
                        style={item.checked ? { textDecoration: 'line-through'} : null }
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label>
                    <FaTrashAlt 
                        role="button" 
                        tabIndex="0" 
                        onClick={() => handleDelete(item.id)}
                    />
                </li>
            ))}</ul>
        </main>
    )
}

export default Content
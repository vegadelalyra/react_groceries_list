import { useState } from "react"
import { FaTrashAlt } from 'react-icons/fa'

const itemsList = [
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"    
    }, 
    {
        id: 2,
        checked: false,
        item: "Item 2"  
    }, 
    {
        id: 3,
        checked: false,
        item: "Item 3"  
    }
]

const Content = () => {
    const [items, setItems] = useState(itemsList)

    const handleCheck = id => {
        const listItems = items.map(item => item.id === id 
            ? { ...item, checked: !item.checked }
            : item
        ); setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    const handleDelete = id => {
        const listItems = items.filter(item => item.id !== id)
        setItems(listItems)
        localStorage.setItem('shoppinglist', JSON.stringify(listItems))
    }

    return !items.length 
    ? ( <main> <p style={{ marginTop: '2rem' }}>Your list is empty.</p> </main>) 
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
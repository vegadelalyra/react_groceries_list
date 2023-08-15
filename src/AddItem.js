import { FaPlus } from 'react-icons/fa'
import { useRef } from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
const inputRef = useRef()

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Item</label>
            <input
                autoFocus
                ref={inputRef}
                id="addItem"
                type="text"
                placeholder="Add Item"
                value={newItem}
                onChange={event => setNewItem(event.target.value)}
                required
            />
            <button
                type="submit"
                aria-label='Add Item'
                onClick={() => {
                    console.log(inputRef, inputRef.current)
                    inputRef.current.focus()}}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem
import Header from './Header'
import SearchItem from './SearchItem'
import AddItem from './AddItem'
import Content from './Content'
import Footer from './Footer'
import apiRequest from './apiRequest'
import { useState, useEffect } from 'react'

// const itemsList = JSON.parse(localStorage.getItem('shoppinglist')) || []

function App() {
    const API_URL = 'https://json-server-db-react-todo-production.up.railway.app/items/'

    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(API_URL)
                if (!response.ok) throw Error('Did not receive expected data')
                const listItems = await response.json()
                setItems(listItems)
                setFetchError(null)
            } catch (error) {
                setFetchError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        // setTimeout(() => {
            (async () => await fetchItems())()
        // }, 1_000)
    }, [])

    const addItem = async item => {
        const id = items.length ? items[items.length - 1].id + 1 : 1
        const myNewItem = { id, checked: false, item }
        const listItems = [...items, myNewItem] 
        setItems(listItems)
    
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(myNewItem)
        }

        const result = await apiRequest(API_URL, postOptions)
        if (result) setFetchError(result)
    }

    const handleCheck = async id => {
        const listItems = items.map(item => item.id === id 
            ? { ...item, checked: !item.checked }
            : item
        )
        setItems(listItems)

        const myItem = listItems.filter(item => item.id === id)[0]
        const updateOptions = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ checked: myItem.checked })
        }
        const reqUrl = API_URL + id
        const result = await apiRequest(reqUrl, updateOptions)
        if (result) setFetchError(result)
    }

    const handleDelete = async id => {
        const listItems = items.filter(item => item.id !== id)
        setItems(listItems)

        const deleteOptions = { method: 'DELETE' }
        const reqUrl = API_URL + id
        const result = await apiRequest(reqUrl, deleteOptions)
        if (result) setFetchError(result)
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!newItem) return 
        addItem(newItem)
        setNewItem('')
    }
	  
	return (
		<div className="App">
			<Header title="Groceries List" />
			<AddItem 
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            <SearchItem 
                search={search}
                setSearch={setSearch}
            />
            <main>
                {isLoading && <p>Loading Items...</p>}
                {fetchError && <p style={{ color: "red" }}>
                    {`Error: ${fetchError}`}
                </p>}
                {!fetchError && !isLoading && <Content 
                    items={items.filter(item => 
                        item.item.toLowerCase()
                        .includes(search.toLowerCase()))}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />}
            </main>
			<Footer length={items.length} />
		</div>
	)
}	

export default App
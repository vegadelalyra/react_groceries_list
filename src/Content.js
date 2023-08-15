import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

    return items.length 
    ? ItemList({ items, handleCheck, handleDelete })
    : ( <main> <p style={{ marginTop: '2rem' }}>Your list is empty.</p> </main> ) 
}

export default Content
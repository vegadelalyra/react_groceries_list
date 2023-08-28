import ItemList from './ItemList'

const Content = ({ items, handleCheck, handleDelete }) => {

    return items.length 
    ? ItemList({ items, handleCheck, handleDelete })
    : ( <> <p style={{ marginTop: '2rem' }}>Your list is empty.</p> </> ) 
}

export default Content
import LineItem from './LineItem'

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <main>
            {/* maps needs to have a key attribute with a value in react */}
            <ul>
                {items.map(item => LineItem(item, handleCheck, handleDelete))}
            </ul>
        </main> 
    )
}

export default ItemList
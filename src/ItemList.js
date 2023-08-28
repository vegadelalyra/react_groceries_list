import LineItem from './LineItem'

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
        <>
            {/* maps needs to have a key attribute with a value in react */}
            <ul>
                {items.map(item => ( 
                    <LineItem
                        key={item.id}
                        item={item}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                ))}
            </ul>
        </> 
    )
}

export default ItemList
const Footer = ({ length }) => {
    return (
        <footer>
            <p>{length} List Item{length === 1 ? '' : 's'}</p>
        </footer>
    )
}

export default Footer
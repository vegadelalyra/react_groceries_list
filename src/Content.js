const Content = () => {
    const handleNameChange = () => {
        const names = ['Rlyeh', 'Veroz', 'Daniel', 'Pollito']
        const int = Math.floor(Math.random() * names.length)
        return names[int]
    }
    
    const handleClick = () => {
        console.log('You clicked it')
    }

    const handleClick2 = name => {
        console.log(name + ' was clicked')
    }

    const handleClick3 = event => {
        console.log(event.target.innerText)
    }

    return (
        <main>
            <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
            <button onClick={handleClick}>Click it!</button>
            <button onClick={() => handleClick2('Daniel')}>Click it!</button>
            <button onClick={e => handleClick3(e)}>Click it!</button>
        </main>
    )
}

export default Content
const StaticComponent = () => {
    const items = ["Manzana", "Banana", "Pera", "Uva"];
    return (
        <ul>
            {
                items.map((iten, index) => (
                    <li key={index}>{iten}</li>
                ))
            }
        </ul>
    )
}

export default StaticComponent;
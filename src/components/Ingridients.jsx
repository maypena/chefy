export default function Ingridients({ingridients, flipRecipeShown}) {
    const ingListItems = ingridients.map(
        (ingridient) => <li key={ingridient}>{ingridient}</li>
    )
    
    return <section>
        {ingridients.length > 0 && <div className="ingridient_list">
            <h2>Ingridients available:</h2>
            <ul >
                {ingListItems}
            </ul>
        </div>}

        {ingridients.length > 3 && <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a resipe from your list of ingridients</p>
            </div>
            <button onClick={flipRecipeShown}>Get a recipe</button>
        </div>}
    </section>
}
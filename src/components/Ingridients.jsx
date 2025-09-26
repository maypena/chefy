import { FadeLoader } from "react-spinners"

export default function Ingridients({ ingridients, getRecipe, removeIng, isLoading }) {
    const ingListItems = ingridients.map(
        (ingridient) => <div className="individual_ingridient_container">
            <li key={ingridient}>{ingridient}</li>
            <button onClick={removeIng}>X</button>
        </div>
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
            <button onClick={getRecipe}>Get a recipe</button>
            <FadeLoader color="silver" size={50} loading={isLoading} aria-label="Loading Spinner"/>
        </div>}
    </section>
}
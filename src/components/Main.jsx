import React from "react"
import Recipe from "./Recipe"
import Ingridients from "./Ingridients"

export default function Main() {
    const [ingridients, setIngridients] = React.useState([])
    const [recipeShown, setRecipeShown] = React.useState(false)

    function addIngridient(formData) {
        const newIngridient = formData.get("ingridient");
        if (!newIngridient) return;
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
    }

    function clearIngridients() {
        setIngridients([])
        setRecipeShown(false)
    }

    function flipRecipeShown() {
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    return (
        <main>
            <form action={addIngridient} className="add_ingridient_form">
                <input
                    type="text"
                    placeholder="e.g. sugar"
                    aria-label="Add ingridient"
                    name="ingridient"
                />
                <button>+ Add ingridient</button>
            </form>

            <Ingridients ingridients={ingridients}
                         clearIngridients={clearIngridients}
                         flipRecipeShown={flipRecipeShown}
            />

            {recipeShown && <Recipe />}

            {ingridients.length > 0 && <button onClick={clearIngridients}  className="clear_button">Clear all!</button>}
        </main>
    )
}
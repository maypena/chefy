import React from "react"
import Recipe from "./Recipe"
import Ingridients from "./Ingridients"
import { getRecipeFromMistral } from "/src/ai.js"

export default function Main() {
    const [ingridients, setIngridients] = React.useState([])
    const [recipe, setRecipe] = React.useState()
    const [isLoading, setIsLoading] = React.useState(false)

    function addIngridient(formData) {
        const newIngridient = formData.get("ingridient");
        if (!newIngridient) return;
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
    }

    function clearIngridients() {
        setIngridients([])
        setRecipe('')
    }

    function getRecipe() {
        setIsLoading(true)
        getRecipeFromMistral(ingridients).then(
        (recipe) => {
            setRecipe(recipe)
        })
        .finally(() => setIsLoading(false))
    }

    function removeIng(e) {
        const ingToRemove = e.target.previousSibling.s
        setIngridients(prevIngridients => prevIngridients.filter(ing => ing !== ingToRemove))
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
                         getRecipe={getRecipe}
                         removeIng={removeIng}
                         isLoading={isLoading}
            />

            {recipe && <Recipe recipe={recipe}/>}

            {ingridients.length > 0 && <button onClick={clearIngridients}  className="clear_button">Clear all!</button>}
        </main>
    )
}
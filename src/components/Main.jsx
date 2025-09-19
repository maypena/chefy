import React from "react"

export default function Main() {
    const [ingridients, setIngridients] = React.useState([])

    const ingListItems = ingridients.map(
        (ingridient) => <li key={ingridient}>{ingridient}</li>
    )

    function addIngridient(formData) {
        const newIngridient = formData.get("ingridient");
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
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

            { ingridients.length > 0 &&
            <section>
                <h2>Ingridients available:</h2>
                <ul className="ingridient_list">
                    {ingListItems}
                </ul>

                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a resipe from your list of ingridients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
        </main>
    )
}
import React from "react"

export default function Main() {
    const [ingridients, setIngridients] = React.useState([])

    const ingListItems = ingridients.map(
        (ingridient) => <li key={ingridient}>{ingridient}</li>
    )

    function addIngridient(formData) {
        const newIngridient = formData.get("ingridient");
        if (!newIngridient) return;
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
    }

    function clearIngridients() {
        setIngridients([])
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


            <section>
                {ingridients.length > 0 && <div className="ingridient_list">
                    <h2>Ingridients available:</h2>
                    <ul >
                        {ingListItems}
                    </ul>
                    <button onClick={clearIngridients}>Clear ingridients</button>
                </div>}

                {ingridients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a resipe from your list of ingridients</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
            </section>
        </main>
    )
}
import React from "react"

export default function Main() {
    const [ingridients, setIngridients] = React.useState([])

    const ingListItems = ingridients.map(
        (ingridient) => <li key={ingridient}>{ingridient}</li>
    )

    function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target);
        const newIngridient = formData.get("ingridient");
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="add_ingridient_form">
                <input 
                    type="text"
                    placeholder="e.g. sugar"
                    aria-label="Add ingridient"
                    name="ingridient"
                />
                <button>+ Add ingridient</button>
            </form>
            <ul>
                {ingListItems}
            </ul>
        </main>
    )
}
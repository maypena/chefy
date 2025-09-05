export default function Main() {
    return (
        <main>
            <form className="add_ingridient_form">
                <input 
                    type="text"
                    placeholder="e.g. sugar"
                    aria-label="Add ingridient"
                />
                <button>+ Add ingridient</button>
            </form>
        </main>
    )
}
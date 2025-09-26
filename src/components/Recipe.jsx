import Markdown from 'react-markdown'

export default function Recipe({ recipe }) {
    return (
        <section className='recipe_container' aria-live="polite">
            <h2>Your Recipe:</h2>
            <Markdown>{recipe}</Markdown>
        </section>
    )
}
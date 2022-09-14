import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

export const Metals = () => {
    let htmls = "<ul>"

    // This is how you have been converting objects to <li> elements
    let metalType = metals.map(metal => {
        htmls += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    })
    htmls += metalType.join("")
    htmls += "</ul>"

    return htmls
}
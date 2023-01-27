import { getTypes, setType } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)


export const Types = () => {
    let typeHtml = `<ul>`
    const typeArray = types.map(
        (type) => {
            return `<li>
                <input type="radio" name="type" value="${type.id}" />${type.type}
            </li>`
        }
    )
    typeHtml += typeArray.join("")
    return typeHtml
}
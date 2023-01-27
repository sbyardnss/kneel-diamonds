import { getTypes, setType, orderBuilderState } from "./database.js"

const types = getTypes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "type") {
            setType(parseInt(event.target.value))
        }
    }
)


// export const Types = () => {
//     let typeHtml = `<ul id="typePicker">`
//     const typeArray = types.map(
//         (type) => {
        
//             return `<li>
//                 <input type="radio" name="type" value="${type.id}" />${type.type}
//             </li>`

        
//         }
//     )
//     typeHtml += typeArray.join("")
//     return typeHtml
// }

// export const Types = () => {
//     let html = `<ul id="typePicker">`
//     for (const type of types) {
//         html += `<li>
//             <input type="radio" name="type" value="${type.id}" `
//         if (currentOrder.typeId === type.id) {
//             html += `checked="checked" /> ${type.type}
//             </li>`
//         } else {
//             html += `/> ${type.type}
//             </li>`
//         }
//     }
//     html += `</ul>`
//     return html
// }

export const Types = () => {
    const currentOrder = orderBuilderState()

    let checked = ""
    let html = `<ul id="typePicker">`
    for (const type of types) {
        if (currentOrder.typeId === type.id) {
            checked = `checked="checked"`
        } else {
            checked = ""
        }
        html += `<li>
            <input type="radio" name="type" value="${type.id}" ${checked} /> ${type.type}
            </li>`

        }
    html += `</ul>`
    return html
}
// import { getMetals, setMetal, orderBuilderState } from "./database.js"
import { getMetals, setMetal, orderBuilderState } from "./dataAccess.js"


const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

// export const Metals = () => {
//     let html = `<ul class="pickers>`

//     // This is how you have been converting objects to <li> elements
//     for (const metal of metals) {
//         html += `<li>
//             <input type="radio" name="metal" value="${metal.id}" `
        
//         if (currentOrder.metalId === metal.id) {
//             html += `checked="checked" /> ${metal.metal}
//             </li>`
//         } else {
//             html += ` /> ${metal.metal}
//             </li>`
//         }
//     }
//     html += "</ul>"
//     return html
// }

export const Metals = () => {
    const currentOrder = orderBuilderState()

    let checked = ""
    let html = `<ul class="picker">`
    for (const metal of metals) {
        if (currentOrder.metalId === metal.id) {
            checked = "checked"
        } else {
            checked = ""
        }
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" ${checked} /> ${metal.metal}
            </li>`

        }
    html += `</ul>`
    return html
}

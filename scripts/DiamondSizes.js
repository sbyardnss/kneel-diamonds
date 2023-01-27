// import { getSizes, setSize, orderBuilderState } from "./database.js"
import { getSizes, setSize, orderBuilderState } from "./dataAccess.js"



const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))

        }

    }
)

// export const DiamondSizes = () => {
//     let html = `<ul class="pickers">`

//     // Use .map() for converting objects to <li> elements
//     const listItems = sizes.map(size => {
//         return `<li>
//             <input type="radio" name="size" value="${size.id}" /> ${size.carets}
//         </li>`
//     })

//     html += listItems.join("")
//     html += "</ul>"

//     return html
// }

// export const DiamondSizes = () => {
//     let html = `<ul class="pickers">`
//     for (const size of sizes) {
//         html += `<li>
//             <input type="radio" name="size" value="${size.id}" `
//         if (currentOrder.sizeId === size.id) {
//             html += `checked="checked" /> ${size.carets}
//             </li>`
//         } else {
//             html += `/> ${size.carets}
//             </li>`
//         }
//     }
//     html += `</ul>`
//     return html
// }

export const DiamondSizes = () => {
    const currentOrder = orderBuilderState()

    let checked = ""
    let html = `<ul class="picker">`
    for (const size of sizes) {
        if (currentOrder.sizeId === size.id) {
            checked = `checked="checked"`
        } else {
            checked = ""
        }
        html += `<li>
            <input type="radio" name="size" value="${size.id}" ${checked} /> ${size.carets}
            </li>`

        }
    html += `</ul>`
    return html
}
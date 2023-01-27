// import { getStyles, setStyle, orderBuilderState } from "./database.js"
import { getStyles, setStyle, orderBuilderState } from "./dataAccess.js"



const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
        

    }
)

// export const JewelryStyles = () => {
//     let html = `<ul class="pickers">`

//     // Use .map() for converting objects to <li> elements
//     const listItemsArray = styles.map(
//         (style) => {
//             return `<li>
//                 <input type="radio" name="style" value="${style.id}" /> ${style.style}
//             </li>`
//         }
//     )


//     // Join all of the strings in the array into a single string
//     html += listItemsArray.join("")

//     html += "</ul>"
//     return html
// }

// export const JewelryStyles = () => {
//     let html = `<ul class="pickers">`
//     for (const style of styles) {
//         html += `<li>
//             <input type="radio" name="style" value="${style.id}" `
//         if (currentOrder.styleId === style.id) {
//             html += `checked="checked" /> ${style.style}
//             </li>`
//         } else {
//             html += ` /> ${style.style}
//             </li>`
//         }
            
//     }
//     html += "</ul>"
//     return html
// }

export const JewelryStyles = () => {
    const currentOrder = orderBuilderState()

    let checked = ""
    let html = `<ul class="picker">`
    for (const style of styles) {
        if (currentOrder.styleId === style.id) {
            checked = `checked="checked"`
        } else {
            checked = ""
        }
        html += `<li>
            <input type="radio" name="style" value="${style.id}" ${checked} /> ${style.style}
            </li>`

        }
    html += `</ul>`
    return html
}
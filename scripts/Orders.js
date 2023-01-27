import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"


const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()


const buildOrderListItem = (order) => {
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    


    let totalCost = foundMetal.price + foundSize.price + foundStyle.price

    const typeMultiplier = (cost) => {
      
      (order.typeId === 1) ? cost = cost
    : (order.typeId === 2) ? cost = (cost * 2)
    : (order.typeId === 3) ? cost = (totalCost * 4)
    : null
    return cost
    }
    const multiCost = typeMultiplier(totalCost)

    
    const costString = multiCost.toLocaleString("en-us", {
        style: "currency",
        currency: "USD"
    })
    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    // </li>  
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


// Remember that the function you pass to find() must return true/false



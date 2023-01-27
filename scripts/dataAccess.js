import { databaseState, database } from "./database.js"

const dataState = databaseState()
// const dataState = database

export const getMetals = () => {
    return dataState.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return dataState.sizes.map(size => ({...size}))
}

export const getStyles = () => {
    return dataState.styles.map(style => ({...style}))
}

export const getOrders = () => {
    return dataState.customOrders.map(order => ({...order}))
}
export const getTypes = () => {
    return dataState.types.map(type => ({...type}))
}


export const setMetal = (id) => {
    dataState.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const setSize = (id) => {
    dataState.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const setStyle = (id) => {
    dataState.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))

}
export const setType = (id) => {
    dataState.orderBuilder.typeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

export const addCustomOrder = () => {
    const newOrder = {...dataState.orderBuilder}
    const lastIndex = dataState.customOrders.length - 1
    newOrder.id = dataState.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    dataState.customOrders.push(newOrder)
    dataState.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const orderBuilderState = () => {
    return dataState.orderBuilder
}

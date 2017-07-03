import * as actionType from './actionTypes'

let nextScriptId = 0
export const saveProfile = profile => ({type: actionType.SAVE_PROFILE, profile})
export const setProducts = products => ({ type: actionType.SET_PRODUCTS, products})
export const setProduct = product => ({ type: actionType.SET_PRODUCT, product})
export const setProductData = (id, data) => ({ type: actionType.SET_PRODUCT_DATA, id, data })
export const setDateRange = (startDate, endDate) => ({type: actionType.SET_DATE_RANGE, startDate, endDate})
export const addScript = () => ({type: actionType.ADD_SCRIPT, id: nextScriptId++ })
export const saveScript = script => ({type: actionType.SAVE_SCRIPT, script})
export const deleteScript = () => ({type: actionType.DELETE_SCRIPT})
export const initDocs = () => ({type: actionType.INIT_DOCS})
export const selectScript = id => ({type: actionType.SELECT_SCRIPT, id})
export const selectDoc = name => ({type: actionType.SELECT_DOC, name})

export const initialState = {
    cities: [],
    itineraries: [],
    user:null

}
export const actionType = {
    CITIESDB : "CITIESDB",
    ITINERARIESDB : "ITINERARIESDB",
    USER: "USER"
}
const reducer=(state,action)=>{
    switch(action.type){
        case "CITIESDB": //evalua el valor de action, para retornar estados
        return{
            ...state, //... paso contenido del array, contenido del estado * respeta la posicion
            cities:action.cities
        }
        case "ITINERARIES":
            return{
                ...state,
                itineraries:action.itineraries
            }
            case "USER":
            return{
                ...state,
                user:action.user
            }
        default: return state
    }
}
export default reducer;
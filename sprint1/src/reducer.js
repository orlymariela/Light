export const initialState = {
    cities: [],
    itineraries: [],
    user:null,
    filterCity: []

}
export const actionType = {
    CITIESDB : "CITIESDB",
    ITINERARIESDB : "ITINERARIESDB",
    USER: "USER",
    FILTER: "FILTER"
}
const reducer=(state,action)=>{
    switch(action.type){
        case "CITIESDB": //evalua el valor de action, para retornar estados
        return{
            ...state, //... paso contenido del array, contenido del estado * respeta la posicion
            cities:action.cities,
            filterCity:action.cities
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
            case "FILTER":
                const filterCity = state.cities.filter(city=>city.name.toLowerCase().startsWith(action.value.toLowerCase().trim()))
            return{
                
                ...state,
                filterCity:filterCity
            }
        default: return state
    }
}
export default reducer;
let init={
    movies:[],
    search:"",
    searchInput:"",
    filter:{trigger:false,movies:[]}

}


export const reducer=(state=init,action)=>{
    switch(action.type){
        case "movieData":
            return {...state,movies:action.payload}

            case "search":
                return {...state,search:action.payload}

                case "searchInput":
                    return {...state,searchInput:action.payload}

                    case "filter":
                        return {...state,filter:{trigger:true,movies:action.payload}}

            default:
                return state
    }
}
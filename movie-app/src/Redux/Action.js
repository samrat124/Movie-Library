
 export const movieAction=(data,dispatch)=>{
dispatch({
    type:'movieData',
    payload:data
})
 }
 export const filterData=(data,dispatch)=>{
    dispatch({
        type:"filter",
        payload:data
    })
 }

 export const typeOfSearch=(data,dispatch)=>{
    dispatch({
        type:'search',
        payload:data
    })

 }
 
 export const SearchInput=(data,dispatch)=>{
    dispatch({
        type:'searchInput',
        payload:data
    })
 }
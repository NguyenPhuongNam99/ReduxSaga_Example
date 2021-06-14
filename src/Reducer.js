import {
    GET_POST,
    GET_POST_SUCCESS,
    GET_POST_FAILED,
    ADD_POST,
    ADD_POST_SUCCESS,
    ADD_POST_FAILED
} from './Action'
const initialState = {
    isLoading:false,
    post:[],
    error:null
}
const Reducer =(state=initialState,{type,payload})=>{
    switch(type){
        case GET_POST :
        case ADD_POST:{
            return{
                ...state,isLoading:true
            }
        }
        case GET_POST_SUCCESS:
            return{
                ...state,
                post:payload,
                isLoading:false
            }
        case GET_POST_FAILED:
        case ADD_POST_FAILED:
            return{
                ...state,
                error:payload,
                isLoading:false
            }
        case ADD_POST_SUCCESS:
            return{
                ...state,
                isLoading:true,
                post:[...state,post,payload]
            }
        default:
            return state;
    }
}
export default Reducer
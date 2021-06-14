export const GET_POST ='GET_POST'
export const GET_POST_SUCCESS ='GET_POST_SUCCESS'
export const GET_POST_FAILED = 'GET_POST_FAILED'

export const ADD_POST = 'ADD_POST'
export const ADD_POST_SUCCESS='ADD_POST_SUCCESS';
export const ADD_POST_FAILED='ADD_POST_FAILED'

export const getPosts = (payload)=>({
    type:GET_POST,
    payload
})


export const getPostsSuccess = (payload)=>({
    type:GET_POST_SUCCESS,
    payload
})

export const getPostsFailed = (payload)=>({
    type:GET_POST_FAILED,
    payload
})
export const addPosts = (payload)=>({
    type:ADD_POST,
    payload
})
export const addPostsSuccess = (payload)=>({
    type:ADD_POST_SUCCESS,
    payload
})
export const addPostFailed = (payload)=>({
    type:ADD_POST_FAILED,
    payload
})

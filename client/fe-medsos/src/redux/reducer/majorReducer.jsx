const init = {
    load: true,
    data: [],
    message: null,
    err: null
}

const majorReducer = (state = init, action) => {
    switch (action?.type) {
        case "MAJOR_INIT":
            return init
        case "MAJOR_PROFILE_SUCCESS":
            return {
                ...state,
                user: action?.payload?.data
            }
        case "MAJOR_PROFILE_FAIL":
            return {
                ...state,
                error: action?.payload?.error
            }
        case "MAJOR_LOGIN_SUCCESS":
            return {
                ...state,
                token: action?.payload?.token
            }
        case "MAJOR_LOGIN_FAIL":
            return {
                ...state,
                error: action?.payload?.error
            }
        default:
            return state
    }
}

export default majorReducer
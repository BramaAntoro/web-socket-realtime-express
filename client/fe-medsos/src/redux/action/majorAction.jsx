import { APISERVICE } from "../../utils"

export const fetchMajor = () => (dispatch) => {
    dispatch({TYPE: "MAJOR_INIT"})

    APISERVICE().get('/major')
        .then((response) => {
            dispatch({
                type: "MAJOR_PROFILE_SUCCESS",
                payload: {
                    data: response.data
                }
            })
        })
        .catch((error) => {
            if (error.response.status === 401) {
                window.location.href = '/login'
            }
            dispatch({
                type: "MAJOR_PROFILE_FAIL",
                payload: {
                    err: error.response
                }
            })
        })
}
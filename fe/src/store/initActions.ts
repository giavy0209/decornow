import callAPI from "call"

export const CHANGE_USER = 'CHANGE_USER'

export const actionChangeUser = function (user) {
    return {
        type: CHANGE_USER,
        payload: { user }
    }
}

export const asyncGetUser = () => async dispatch => {
    const { data } = await callAPI.get(`/user`)
    dispatch(actionChangeUser(data))
}


export const fetchUser = () => {
    return async (dispatch) => {
        dispatch({ type: "FETCH_USER_REQUEST" });

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();

            dispatch({
                type: "FETCH_USER_SUCCESS",
                payload: data
            });
        } catch (error) {
            dispatch({
                type: "FETCH_USER_FAILURE",
                payload: error.message
            });
        }
    };
};
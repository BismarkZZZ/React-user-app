const initialState = {
    users: [
        {
            name: "Meeky",
            email: "Meekyx@oasis.com",
            gen: 9,
            id: "8932bh2gv8293b",
        },
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...state, users: [...state.users, action.payload]};
        case "DELETE_USER":
            let undeletedUsers = state.users.filter((user) => user.id !== action.payload);
            return {...state, users: undeletedUsers}
        case "EDIT_USER":
            return {...state, users: state.users.map((user) =>
                user.id === action.payload.id ? action.payload : user),}
        default:
            return state;
    }
}

export default userReducer;
const initialState = {
    users: [
        {
            name: "Meeky",
            email: "Meekyx@oasis..com",
            gen: 9,
            id: "8932bh2gv8293b",
        },
    ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {...state, users: [...state.users, action.payload]};
        
        default:
            return state;
    }
}

export default userReducer;
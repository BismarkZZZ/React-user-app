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
            return state;
        
        default:
            return state;
    }
}

export default userReducer;
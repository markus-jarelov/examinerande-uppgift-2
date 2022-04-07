let initState = [];

export default function reducer(state = initState, action) {
    let id = state.findIndex(game => game.id === action.payload.id) //variabel för rating
    let prevId = state.length;
    switch (action.type) {
        case 'gameAdded':
            return [...state,
                {
                    id: ++prevId,
                    title: action.payload.title,
                    rating: action.payload.rating
                }
            ];

        case 'gameDeleted':
            return state.filter(game => game.id !== action.payload)

        case 'stateAdded':
            return action.payload

        case 'increasedRating':
            state[id].rating = action.payload.rating + 1
            return [...state]

        case 'decreasedRating':
            state[id].rating = action.payload.rating - 1
            return [...state]

        default:
            return state;
    }
}
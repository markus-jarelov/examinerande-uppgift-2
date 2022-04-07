export const addGame = (title, rating) => ({
    type: 'gameAdded',
    payload: {
        title,
        rating
    },
});

export const deleteGame = id => ({
    type: 'gameDeleted',
    payload: id
})

export const addState = data => ({
    type: 'stateAdded',
    payload: data
});

export const incrementRating = (id, rating) => ({
    type: 'increasedRating',
    payload: {
        id,
        rating
    }
});

export const decrementRating = (id, rating) => ({
    type: 'decreasedRating',
    payload: {
        id,
        rating
    }

});
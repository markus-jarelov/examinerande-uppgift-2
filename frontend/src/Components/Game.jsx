import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementRating, incrementRating, deleteGame } from '../actions/actions';

export default function Game() {
  const gamesList = useSelector(state => state);
  const dispatch = useDispatch();

  const rateUp = (id, rating) => {
    dispatch(incrementRating(id, rating));
  }

  const rateDown = (id, rating) => {
    dispatch(decrementRating(id, rating));
  }

  const handleDelete = id => {
    dispatch(deleteGame(id));
  }

  return (
    gamesList.map((game, index) => (
      <article key={index}>
        <h1 className='title'>{index + 1} - {game.title}</h1>
        <div className='rating'>
          <button onClick={() => rateDown(game.id, game.rating)}>-</button>
          <h3>{game.rating}</h3>
          <button onClick={() => rateUp(game.id, game.rating)}>+</button>
        </div>
        <button className='delete' onClick={() => handleDelete(game.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none' }}>DELETE</button>
      </article>
    ))
  )
}

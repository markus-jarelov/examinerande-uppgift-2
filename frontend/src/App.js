import React, { useEffect, useState } from 'react';
import './App.css';
import Game from './Components/Game';
import { useDispatch } from 'react-redux';
import { addGame, addState } from './actions/actions';

function App() {
  const dispatch = useDispatch();
  const [gameList, setGameList] = useState([])

  useEffect(() => {
    fetch('http://localhost:1234/data.json')
      .then(resp => resp.json())
      .then(data => setGameList(data))
  }, []);

  dispatch(addState(gameList));

  let titleInput = React.createRef();
  let ratingInput = React.createRef();

  const newGame = () => {
    dispatch(addGame(titleInput.current.value, parseInt(ratingInput.current.value)));
    titleInput.current.value = '';
    ratingInput.current.value = '';
  }

  return (
    <main>
      <div className='head'>
        <h1>FAVOURITE GAMES</h1>
        <h2>RATING / 100</h2>
      </div>
      <Game />
      <div className='addGame'>
        <h3>ADD GAME</h3>
        <input type="text" ref={titleInput} required placeholder='GAME TITLE' />
        <input type="number" ref={ratingInput} min='1' max='100' required placeholder='RATING' />
        <button type="submit" onClick={newGame}>ADD</button>
      </div>
    </main>
  );
};

export default App;

import './style.css';
import {
  refresh, form, player, score,
} from './modules/declares.js';
import getScores from './modules/getScores.js';

getScores();

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6HRG9GY8pYokmWJqH497/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: player.value,
      score: score.value,
    }),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });
  window.location.reload();
});

refresh.addEventListener('click', () => {
  window.location.reload();
});

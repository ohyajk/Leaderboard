import { scoreDiv } from './declares.js';

const getScores = async () => {
  const scores = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5zsvkfXFRCOMzxGmVtcx/scores/');
  const res = await scores.json();
  const strObj = JSON.stringify(res.result);
  const parseObj = JSON.parse(strObj);

  parseObj.forEach((obj) => {
    scoreDiv.innerHTML += `<span>${obj.user}: ${obj.score}</span>`;
  });
};

export default getScores;

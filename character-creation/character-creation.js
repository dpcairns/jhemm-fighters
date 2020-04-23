import classes from '../data/classes.js';
import { findById, setPlayerProfile } from '../common/utils.js';
const playerForms = document.getElementById('character-selector');

playerForms.addEventListener('submit', (event) => {
    event.preventDefault();
    const playerData = new FormData(playerForms);
    
    makeUsers(playerData);

    window.location.href = './interim.html';
});

function makeUsers(playerData) {
    
    const player1Class = playerData.get('class1');
    const player2Class = playerData.get('class2');

    const player1Name = playerData.get('player1name');
    const player2Name = playerData.get('player2name');

    const player1Character = findById(classes, player1Class);
    const player2Character = findById(classes, player2Class);

    const player1Object = { 
        id: 'player1',
        name: player1Name,
        class: player1Class,
        image: player1Character.image,
        health: player1Character.baseHp,
        energy: player1Character.baseEnergy,
        hasAttacked: false,
        attackId: '',
        hasDefended: false,
        defendId: ''
    };
    const player2Object = { 
        id: 'player2',
        name: player2Name,
        class: player2Class,
        image: player2Character.image,
        health: player2Character.baseHp,
        energy: player2Character.baseEnergy,
        hasAttacked: false,
        attackId: '',
        hasDefended: false,
        defendId: ''
    };
    setPlayerProfile('player1', player1Object);
    setPlayerProfile('player2', player2Object);
}

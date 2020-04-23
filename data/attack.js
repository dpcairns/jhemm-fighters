const recoverEnergy = {
    id: 'action0',
    name: 'Recover Energy',
    description: 'You take a moment in the break of combat to catch your breath and energy.',
    minEffectiveRoll: 0,
    damage: 0,
    energyReq: -3
};

const silentDaggerThrow = {
    id: 'action1',
    name: 'Dagger Throw',
    description: 'You quickly toss one of your throwing daggers at your enemy!',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};
const silentDualWielding = {
    id: 'action2',
    name: 'Dual Wielding',
    description: 'You have your blades appear in your hands and quickly rush your opponent hoping two is better than one!',
    minEffectiveRoll: 4,
    damage: 2,
    energyReq: 2
};
const silentSilentStrike = {
    id: 'action3',
    name: 'Silent Strike',
    description: 'As your opponent blinks you appear behind them and attempt to stab them in the back!',
    minEffectiveRoll: 6,
    damage: 5,
    energyReq: 4
};
const brawnLightStrike = {
    id: 'action4',
    name: 'One Handed Master',
    description: 'You pull out your weapon and decide to test your opponents skills in hand to hand combat!',
    minEffectiveRoll: 3,
    damage: 1,
    energyReq: 1
};
const brawnBullRush = {
    id: 'action5',
    name: 'Bull Rush',
    description: 'You scream with furiousity and charge your opponent to bring your might down on them!',
    minEffectiveRoll: 5,
    damage: 2,
    energyReq: 2
};
const brawnTwoHandedBlow = {
    id: 'action6',
    name: 'Two Handed Blow',
    description: 'With a heave you lift your two handed maul and attempt to pulverize your opponent!',
    minEffectiveRoll: 6,
    damage: 4,
    energyReq: 3
};
const casterLightningStrike = {
    id: 'action7',
    name: 'Lightning Strike',
    description: 'You catch a lightning bolt in the air with your staff and redirect it to your opponent!',
    minEffectiveRoll: 4,
    damage: 1,
    energyReq: 1
};
const casterFireStrike = {
    id: 'action8',
    name: 'Fire Strike',
    description: 'You whisper an incantation into your palm and toss a fireball at your opponent!',
    minEffectiveRoll: 5,
    damage: 3,
    energyReq: 3
};
const casterBlizzard = {
    id: 'action9',
    name: 'Blizzard',
    description: 'You look above your opponent and start to freeze the water above them. You call down a raging blizzard on your opponent!',
    minEffectiveRoll: 3,
    damage: 5,
    energyReq: 7
};
const attacks = [
    recoverEnergy,
    silentDaggerThrow,
    silentDualWielding,
    silentSilentStrike,
    brawnBullRush,
    brawnLightStrike,
    brawnTwoHandedBlow,
    casterBlizzard,
    casterFireStrike,
    casterLightningStrike
];



// const attacks = [
//     recoverEnergy,
//     silentWeak,
//     silentMedium,
//     silentStrong,
//     brawnWeak,
//     brawnMedium,
//     brawnStrong,
//     casterWeak,
//     casterMedium,
//     casterStrong
// ];

export default attacks;



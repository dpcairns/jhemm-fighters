const recoverEnergy = {
    id: 'action0',
    name: 'Recover Energy',
    image: '/jhemm-fighters/assets/restoreenergy.jpg',
    description: 'You take a moment in the break of combat to catch your breath and energy.',
    defenseRating: 0,
    health: 0,
    energyReq: -3
};
const silentDodge = {
    id: 'action1',
    name: 'Dodge',
    image: '/jhemm-fighters/assets/silentevasion.jpg',
    description: 'You deftly slide to the left and right attempting to avoid your opponents attacks!',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};
const silentSmokeBomb = {
    id: 'action2',
    name: 'Smoke Bomb',
    image: '/jhemm-fighters/assets/smokebomb.webp',
    description: 'You toss a Smoke Bomb to your feet that bursts into black and purple smoke causing your form to vanish!',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};
const silentMirrorImage = {
    id: 'action3',
    name: 'Mirror Image',
    image: '/jhemm-fighters/assets/Mirror-Self.webp',
    description: 'You start your incantation and create an illusion of yourself confusing your opponent!',
    defenseRating: 4,
    health: 0,
    energyReq: 4
};
const brawnParry = {
    id: 'action4',
    name: 'Parry',
    image: '/jhemm-fighters/assets/warriordodge.jpg',
    description: 'You use your superior skill at arms to attempt to parry your foes attack!',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};
const brawnRaiseShield = {
    id: 'action5',
    name: 'Raise Shield',
    image: '/jhemm-fighters/assets/raise shield.jpg',
    description: 'You tighten your grip on your shield and raise it to catch the enemies futile attacks!',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};
const brawnUnstoppable = {
    id: 'action6',
    name: 'Unstoppable',
    image: '/jhemm-fighters/assets/unstoppable.jpg',
    description: 'You bang on your chest and brace yourself for whatever puny attack your enemy will throw at you!',
    defenseRating: 3,
    health: 0,
    energyReq: 3
};
const casterLightningDodge = {
    id: 'action7',
    name: 'Lightning Dodge',
    image: '/jhemm-fighters/assets/lightningdefense.jpg',
    description: 'You send lightning through your body to dodge out of the way!',
    defenseRating: 1,
    health: 0,
    energyReq: 1
};
const casterStoneWall = {
    id: 'action8',
    name: 'Stone Wall',
    image: '/jhemm-fighters/assets/wallofstone.png',
    description: 'You call upon the Earth to raise a wall of stone!.',
    defenseRating: 2,
    health: 0,
    energyReq: 2
};
const casterFrostShield = {
    id: 'action9',
    name: 'Frost Shield',
    image: '/jhemm-fighters/assets/frost armor.png',
    description: 'You call upon the water in your body to surround your skin with a shield of frost!',
    defenseRating: 4,
    health: 0,
    energyReq: 4
};


const defense = [
    recoverEnergy,
    silentDodge,
    silentMirrorImage,
    silentSmokeBomb,
    brawnParry,
    brawnRaiseShield,
    brawnUnstoppable,
    casterFrostShield,
    casterLightningDodge,
    casterStoneWall
];
export default defense;
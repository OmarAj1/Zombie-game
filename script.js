const Player = {
    maxHp: 100,
    currentHp: 100,
    name: 'player',
    str: 10,
    dex: 10,
    def: 2,
    xp: 0,
    lvl: 1,
    potions: 0,
    freePoints: 3,
    gold: 0
}
class Monster {
    constructor(maxHp, currentHp, name, str, dex, gold, lvl, def) {
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.name = name;
        this.str = str;
        this.dex = dex;
        this.gold = gold;
        this.lvl = lvl;
        this.def = def;
    }
}


function fight() {

}
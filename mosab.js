const listMon = [{
    maxHp: 100,
    currentHp: 100,
    name: "Monster1",
    str: 10,
    dex: 10,
    def: 2,
    gold: 35,
    lvl: 1
}, {
    maxHp: 100,
    currentHp: 100,
    name: "Monster2",
    str: 10,
    dex: 10,
    def: 2,
    gold: 30,
    lvl: 1
}]

console.log(listMonsters(listMon));

function listMonsters(arr) {
    const res = arr.reduce((curr, acurrVal) => {
        debugger
        const obj = {
            name: acurrVal.name,
            gold: acurrVal.gold,
            lvl:acurrVal.lvl
        }
        curr.push(obj);
        return curr;
    }, [])
    return res;
}


function monsterTofight(monsterName, arrMonsters) {
    // get monster name, starts a fight
    arrMonsters.forEach(monster => {
        if (monsterName == monster.name) {
            return monster;
        }
    });
}
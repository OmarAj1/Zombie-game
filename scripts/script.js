let currentLocation = null;
const location1 = ["blabla", "dladla"];
const location2 = ["zz", "yy"];


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
// ######################################################################################################################
// #                                                                                                                    #
// #                                                  Omar                                                              #
// #                                                                                                                    #
// ######################################################################################################################

function fight(monster) {
    while (player.currentHp > 0 && monster.currentHp > 0) {
        // when the player attacks
        let damage = player.str - monster.def;
        monster.currentHp -= damage;
        // when the monster attacks
        damage = monster.str - player.def;
        player.currentHp -= damage;
    }

    if (player.currentHp <= 0) {
        console.log("Game Over! you lost the fight.");
    }
}
let locations = [
    location1 = {
        name: 'mapName',
        monsters: [{}, {}]
    },
    //for ex
];



function goToLocation(locationName) {
    locations.forEach((location) => {
        if (location.name === locationName) {
            currentLocation = location;
        }
    });
}

function playerCreating() {
    return Player;
}

// ######################################################################################################################
// #                                                                                                                    #
// #                                                  Mika                                                              #
// #                                                                                                                    #
// ######################################################################################################################

function genLocations(arr1, arr2) {
  //2 arrays of str
  let word1 = Math.floor(Math.random() * arr1.length); //random num of index in arr1
  let word2 = Math.floor(Math.random() * arr2.length); //random num of index in arr2
  let nameLocation = `${arr1[word1]} ${arr2[word2]}`; //new str contain word from arr1 and second word from arr2
  return nameLocation;
}

function listLocations(num, arr1, arr2) {
  //num is amount of location that we want
  let listLocation = [];
  for (let i = 0; i < num; i++) {
    listLocation.push(genLocations(arr1, arr2));
  }
  return listLocation.join(" ");
}

// ######################################################################################################################
// #                                                                                                                    #
// #                                                 Mosab                                                              #
// #                                                                                                                    #
// ######################################################################################################################

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


function monsterToFight(monsterName, arrMonsters) {
    // get monster name, starts a fight
    arrMonsters.forEach(monster => {
        if (monsterName == monster.name) {
            return monster;
        }
    });
}

// ######################################################################################################################
// #                                                                                                                    #
// #                                                  Elad                                                              #
// #                                                                                                                    #
// ######################################################################################################################

function genMonster(level) {
    const arrOfMonsterStats = createStats(level);
    return new Monster(...arrOfMonsterStats);
  }
  
  function createStats(level) {
    const AMOUNT_OF_STATS = 8;
    const arrOfMonsterStats = [80, 80, generateName(), 10, 10, 100, level, 2];
    let extraStats = 1;
    for (let i = 1; i < level; i++) {
      extraStats = 1;
      let index = Math.floor(Math.random() * AMOUNT_OF_STATS);
      if (index === 1) index--; //don't change current hp - change max hp
      if (index === 2 || index === 5 ) index++; //don't change name - change str
      if (index === 6) index++;
      if (index === 0) extraStats = 10; // if change hp add 10 not 1
      arrOfMonsterStats[index] += extraStats;
    }
    arrOfMonsterStats[1] = arrOfMonsterStats[0]; //set current hp to the same as max hp;
    return arrOfMonsterStats;
  }
  
  function generateName() {
    return "Elad";
  }
  
  
  function mapLocationMonsters(locationName,minLevel) { //first map min level is 1. 2nd map is 5, 3rd is 9 etc...
    const monsters =[];
    for (let i = 0; i < 4 ; i++) {
      monsters.push(genMonster(minLevel+i)); 
    }
    return {name: locationName, monsters};
  }
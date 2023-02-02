const location1 = ["blabla", "dladla"];
const location2 = ["zz", "yy"];
let locationNames = listLocations(4, location1, location2);
let mapLocations = [];
let currentLocation = null;
const EXP_PER_KILL = 50;

const Player = {
  maxHp: 100,
  currentHp: 100,
  name: "omar",
  str: 10,
  dex: 10,
  def: 2,
  xp: 0,
  lvl: 12,
  potions: 0,
  freePoints: 5,
  gold: 0,
  getRewards(monster) {
    this.gold += monster.gold;
    this.xp += EXP_PER_KILL;
    if (this.xp >= 100) {
      this.xp = 0;
      this.lvl++;
      this.freePoints += 2;
    }
  },
};
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

locationNames.forEach((location, index) => {
  mapLocations.push(mapLocationsMonsters(location, index * 4 + 1));
});

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

function genLocations(arr1, arr2) {
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
  return listLocation;
}

function listMonsters(arr) {
  const res = arr.reduce((curr, acurrVal) => {
    const obj = {
      name: acurrVal.name,
      gold: acurrVal.gold,
      lvl: acurrVal.lvl,
    };
    curr.push(obj);
    return curr;
  }, []);
  return res;
}

function monsterToFight(monsterName, arrMonsters) {
  // get monster name, starts a fight
  arrMonsters.forEach((monster) => {
    if (monsterName == monster.name) {
      return monster;
    }
  });
}

function genMonster(level) {
  const monsterStats = createStats(level);
  return new Monster(...monsterStats);
}

function createStats(level) {
  const AMOUNT_OF_STATS = 8;
  const monsterStats = [100, 100, generateName(), 10, 10, 100, level, 2];
  let extraStats = 1;
  for (let i = 1; i < level; i++) {
    extraStats = 1;
    let index = Math.floor(Math.random() * AMOUNT_OF_STATS);
    if (index === 1) index--; //don't change current hp - change max hp
    if (index === 2 || index === 5) index++; //don't change name - change str
    if (index === 6) index++;
    if (index === 0) extraStats = 10; // if change hp add 10 not 1
    monsterStats[index] += extraStats;
  }
  monsterStats[1] = monsterStats[0]; //set current hp to the same as max hp;
  return monsterStats;
}

function generateName() {
  return "Elad";
}

function mapLocationsMonsters(locationName, minLevel) {
  //first map min level is 1. 2nd map is 5, 3rd is 9 etc...
  const monsters = [];
  for (let i = 0; i < 4; i++) {
    monsters.push(genMonster(minLevel + i));
  }
  return { name: locationName, monsters };
}

function swapWarrior(warrior1, warrior2) {
  warriorTemp = warrior1;
  warrior1 = warrior2;
  warrior2 = warriorTemp;
}

function fight(warrior1, warrior2) {
  if (warrior1.dex <= warrior2.dex) {
    swapWarrior(warrior1, warrior2);
  }

  while (warrior1.currentHp > 0 && warrior2.currentHp > 0) {
    // when the player attacks
    let damage = warrior1.str + extraDamage(warrior1.lvl) - warrior2.def;
    warrior2.currentHp -= damage;
    // when the monster attacks
    if (warrior2.currentHp <= 0) {
      break;
    }
    damage = warrior2.str + extraDamage(warrior1.lvl) - warrior1.def;
    warrior1.currentHp -= damage;
  }

  if (Player.currentHp <= 0) {
    console.log("Game Over! you lost the fight.");
    return;
  }
  if (warrior1 instanceof Monster) {
    Player.getRewards(warrior1);
  } else {
    Player.getRewards(warrior2);
  }
}

function extraDamage(level) {
  return parseInt(level * Math.random() * 1.35);
}

// const monsterStrong = new Monster(...createStats(3));
// fight(Player, monsterStrong);
// console.log(Player);

// trying to approach DOM
// hide all sections except the name page
const nameInput = document.querySelector("#namePlayer");
const startBtn = document.querySelector(".start-game-btn");
const gameStartContainer = document.querySelector(".myContainer");
const endStatsBtn = document.querySelector(".go-to-map");
const playerStatsContainer = document.querySelector(".stats-container");

// document.querySelector(".container").style.display = "none";
// document.querySelector(".Container").style.display = "none";
// document.querySelector(".containerWorld").style.display = "none";
// document.querySelector(".gameOver").style.display = "none";

//Character Page
const btnStr = document.querySelector(".btnStr");
const btnDex = document.querySelector(".btnDex");
const btnDef = document.querySelector(".btnDef");
const btnHp = document.querySelector(".btnXp");

document.querySelector("#btnLvl").innerHTML = Player.lvl;
document.querySelector("#name").innerHTML = Player.name;
document.querySelector("#strVal").innerHTML = Player.str;
document.querySelector("#dexVal").innerHTML = Player.dex;
document.querySelector("#defVal").innerHTML = Player.def;
document.querySelector("#xpVal").innerHTML = Player.currentHp;
document.querySelector("#freePoints").innerHTML = Player.freePoints;

startBtn.addEventListener("click", () => {
    console.log(Player.name);
  if (nameInput.value === '') {
    return;
  }
  Player.name = nameInput.value;
  gameStartContainer.classList.add('display-none');
});



btnStr.addEventListener("click", function () {
  if (Player.freePoints > 0) {
    Player.str++;
    document.querySelector("#strVal").innerHTML = Player.str;
    Player.freePoints--;
    document.querySelector("#freePoints").innerHTML = Player.freePoints;
  }
});
btnDex.addEventListener("click", function () {
  if (Player.freePoints > 0) {
    Player.dex++;
    document.querySelector("#dexVal").innerHTML = Player.dex;
    Player.freePoints--;
    document.querySelector("#freePoints").innerHTML = Player.freePoints;
  }
});
btnDef.addEventListener("click", function () {
  if (Player.freePoints > 0) {
    Player.def++;
    document.querySelector("#defVal").innerHTML = Player.def;

    Player.freePoints--;
    document.querySelector("#freePoints").innerHTML = Player.freePoints;
  }
});
btnHp.addEventListener("click", function () {
  if (Player.freePoints > 0) {
    Player.currentHp+=10;
    document.querySelector("#xpVal").innerHTML = Player.currentHp;
    Player.freePoints--;
    document.querySelector("#freePoints").innerHTML = Player.freePoints;
  }
});


endStatsBtn.addEventListener('click',()=>{
    playerStatsContainer.classList.add('display-none');
});
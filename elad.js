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



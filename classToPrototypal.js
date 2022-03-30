//Class Based Inheritance
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "atack with " + this.weapon;
  }
}

class Queen extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    return `I am ${this.name} of ${this.type} with ${this.weapon} as my weapon`;
  }
}

const victoria = new Queen("Victoria", "army", "hearts");

// console.log(victoria.attack()); // will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '

//Functional Inheritance

function FCharacter(name, weapon) {
  console.log(name, weapon);
  this.name = name;
  this.weapon = weapon;
  this.attack = function () {
    return `My name is ${this.name} and my weapon is ${this.weapon}`;
  };
}

FCharacter.prototype.attack = function () {
  return `My name is ${this.name} and my weapon is ${this.weapon}`;
};

function FQueen(name, weapon, type) {
  FCharacter.call(this, name, weapon);
  this.type = type;
}

FQueen.prototype = new FCharacter();

//Override
FQueen.prototype.attack = function () {
  return `My name is ${this.name} and my weapon is ${this.weapon} and type ${this.type}`;
};

// const character = new FCharacter("Vishal", "army");
const queen = new FQueen("Vishal", "army", "hearts");

console.log(queen.attack());

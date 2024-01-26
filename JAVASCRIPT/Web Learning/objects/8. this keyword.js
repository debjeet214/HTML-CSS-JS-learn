// The this keyword is used to access the calling object. Confused? Well, let's try to visualize it.

let player = {
name: "default_name",
weapon: "Pistol",
exp: "Pro",

// defining method
setName: function(name) {
this.name=name;
},
getName: function() {
return this.name;
},
showInfo: function() {
console.log(`${this.getName()} uses ${this.weapon} and is ${this.exp} level player in STBattleRoyal`);
}
};

player.setName("John Wick");
player.showInfo();

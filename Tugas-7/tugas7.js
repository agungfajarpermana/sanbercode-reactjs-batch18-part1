// SOAL KE 1
// Realease 0
class Animal {
    constructor(name, legs = 4, cold_blooded = false){
        this.AnimalName = name;
        this.AnimaLegs = legs;
        this.AnimalCold = cold_blooded;
    }

    get name(){
        return this.AnimalName;
    }
    
    get legs(){
      return this.AnimaLegs;
    }
  
    get cold_blooded(){
      return this.AnimalCold;
    }
}
var sheep = new Animal("shaun");
 
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

// Realease 1
class Frog extends Animal{
    constructor(name,legs = 4, cold_blooded = false){
        super(name);
        this.AnimaLegs = legs;
        this.AnimalCold = cold_blooded;
    }

    jump(){
        return 'hop hop';
    }
}
 
var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

class Ape extends Animal{
    constructor(name, cold_blooded){
        super(name);
        this.AnimalCold = cold_blooded;
    }

    yell(){
        return 'Auuuuooooo';
    }
}

var sungokong = new Ape("kera sakti")
console.log(sungokong.yell());

// SOAL KE 2
class Clock {
    constructor({template}){
      this.templates = template;
      this.timer = null;
   }
    
   render(){
      var date = new Date();
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      var output = this.templates
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
    
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(),1000);
    }
  }
  var clock = new Clock({template: 'h:m:s'});
  // clock.start();
  clock.stop();
// Задание 4
function Device (capacity){
  this.onOff = 'off';
  this.capacity = capacity;
}
Device.prototype.getOn = function(){
    this.onOff = 'on'
  };
Device.prototype.getOff = function(){
    this.onOff = 'off'
  };

function Lamps (name,capacity,kelvin){
  this.name = name;
  this.capacity = capacity;
  this.kelvin = kelvin;
  this.printView = function(){
    console.log(`Тип лампы: ${this.name}. Мощность: ${this.capacity} Вт. Температура : ${this.kelvin}K.`)
    console.log('Питание в положении: ' + this.onOff )
  }
}

Lamps.prototype = new Device();

const lamp = new Lamps('desk lamp', 60 , 4000)

function Microwaves (design, capacity, color){
  this.design = design;
  this.capacity = capacity;
  this.color = color;
  this.percentCapacity = function (){
    this.desiredPercent = prompt('Введите на каком проценте мощности будет использоваться СВЧ');
    alert(`Потребление в таком режиме будет - ${this.desiredPercent * this.capacity / 100} Вт`)
  }
}

Microwaves.prototype = new Device();

Microwaves.prototype.printView = function(){
    console.log(`Дизайн СВЧ: ${this.design}. Мощность: ${this.capacity} Вт. Цвет : ${this.color}.`)
    console.log('Питание в положении: ' + this.onOff )
  }
const microwave = new Microwaves('Hi Tech', 2500, 'black')
lamp.getOn();
lamp.printView();
microwave.percentCapacity();
microwave.printView();

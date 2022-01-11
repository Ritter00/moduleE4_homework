// Задание 5
class Device{
  constructor(capacity){
    this.capacity = capacity;
    this.onOff = 'off';
  }
  getOn = function(){
    this.onOff = 'on'
  };
  getOff = function(){
    this.onOff = 'off'
  };
}

class Lamp extends Device {
  constructor(name, capacity, kelvin){
    super();
    this.name = name;
    this.capacity = capacity;
    this.kelvin = kelvin;
  }
  printView = function(){
    console.log(
      `Тип лампы: ${this.name}. Мощность: ${this.capacity} Вт. Температура : ${this.kelvin}K.
 Питание в положении: ${this.onOff}`
    )
  }
}

class Microwaves extends Device{
  constructor(design, capacity, color){
    super();
    this.design = design;
    this.capacity = capacity;
    this.color = color;
  };
  percentCapacity = function (){
    this.desiredPercent = prompt('Введите на каком проценте мощности будет использоваться СВЧ');
    alert(`Потребление в таком режиме будет - ${this.desiredPercent * this.capacity / 100} Вт`)
  };
  printView = function(){
    console.log(`Дизайн СВЧ: ${this.design}. Мощность: ${this.capacity} Вт. Цвет : ${this.color}.`)
    console.log('Питание в положении: ' + this.onOff )
  };
}
const lamp = new Lamp('desk lamp', 60 , 4000);
const microwave = new Microwaves('Hi Tech', 2500, 'black');
lamp.getOn();
lamp.printView();
microwave.percentCapacity();
microwave.printView();

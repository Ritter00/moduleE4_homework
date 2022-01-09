// Задание 1
const prot = {
  constKey1: 'constValue1',
  constKey2: 'constValue2',
};

const obj = Object.create(prot);
obj.key3 = 'value3';
obj.key4 = 'value4';
obj.key5 = 'value5';

function selfobj (object){
  for (let key in object){
    if(object.hasOwnProperty(key)){
      console.log(`${key} - ${object[key]}`)
    }
  }
};
selfobj(obj);

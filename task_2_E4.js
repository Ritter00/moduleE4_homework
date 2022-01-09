// Задание 2
const obj = new Object();
obj.key3 = 'value3';
obj.key4 = 'value4';
obj.key5 = 'value5';

function strobj (str, object){
  return object.hasOwnProperty(str)
};
console.log(strobj('key5', obj));
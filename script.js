
let answer = 0;
let a = 0;
let b = 0;
let operacion = '';
let newNumber = true;
let numOne = document.getElementById('one');
let numTwo = document.getElementById('two');
let numThree = document.getElementById('three');
let numFour = document.getElementById('four');
let numFive = document.getElementById('five');
let numSix = document.getElementById('six');
let numSeven = document.getElementById('seven');
let numEight = document.getElementById('eight');
let numNine = document.getElementById('nine');
let numCero = document.getElementById('cero');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let divide = document.getElementById('divide');
let times = document.getElementById('times');
let negative = document.getElementById('negative');
let pantalla = document.getElementById('thescreen');
let numero = '0';
let igual = document.getElementById('enter');
let reboot = document.getElementById('startAll');
let clearNum = document.getElementById('clear');
let borrar = document.getElementById('backSpace');

function everyNumber (numb){
   if (!newNumber){
      numero = numero + numb;
      pantalla.value = numero;
   } else {
      numero = numb;
      pantalla.value = numero;
      newNumber = false;
   };
}
//FUNCTION FOR THE EVENT 'CLICK' ON EACH NUMBER
numOne.onclick = () => {
   everyNumber('1');
};

numTwo.onclick = () => {
   everyNumber('2');
};

numThree.onclick = () => {
   everyNumber('3');
};

numFour.onclick = () => {
   everyNumber('4');
};

numFive.onclick = () => {
   everyNumber('5');
};

numSix.onclick = () => {
   everyNumber('6');
};

numSeven.onclick = () => {
   everyNumber('7');
};

numEight.onclick = () => {
   everyNumber('8');
};

numNine.onclick = () => {
   everyNumber('9');
};

numCero.onclick = () => {
   if (numero === '0'){
      pantalla.value = numero;
   } else {
      numero = numero + '0';
      pantalla.value = numero;
      newNumber = false;
   };
};

decimal.onclick = () => {
   numero = numero + '.';
   pantalla.value = numero;
};

//CUATRO OPERACIONES
plus.onclick = () => {
   operacion = '+'
   if (newNumber) {
      a = answer;
   } else {
      a = Number(numero);
   };
   numero = '0';
   pantalla.value = '';
   newNumber = true;
}

minus.onclick = () => {
   operacion = '-'
   if (newNumber) {
      a = answer;
   } else {
      a = Number(numero);
   };
   numero = '0';
   pantalla.value = '';
   newNumber = true;
}

times.onclick = () => {
   operacion = 'x'
   if (newNumber) {
      a = answer;
   } else {
      a = Number(numero);
   };
   numero = '0';
   pantalla.value = '';
   newNumber = true;
}

divide.onclick = () => {
   operacion = '/'
   if (newNumber) {
      a = answer;
   } else {
      a = Number(numero);
   };
   numero = '0';
   pantalla.value = '';
   newNumber = true;
}

negative.onclick = () => {
   numero = numero * -1;
   pantalla.value = numero;
};


//Boton de igualdad
igual.onclick = () => {
   switch (operacion) {
      case '+':
         answer = a + Number(numero);
         numero = answer;
         pantalla.value = answer;
         newNumber = true;
         break;
      case '-':
         answer = a - Number(numero);
         numero = answer;
         pantalla.value = answer;
         newNumber = true;
         break;
      case 'x':
         answer = a * Number(numero);
         numero = answer;
         pantalla.value = answer;
         newNumber = true;
         break;
      case '/':
         answer = a / Number(numero);
         numero = answer;
         pantalla.value = answer;
         newNumber = true;
         break;
     };
}

//reiniciar, clears y borrar.
reboot.onclick = () => {
   numero = '0';
   newNumber = true;
   operacion = '';
   pantalla.value = '';
};

clearNum.onclick = () => {
   numero = '0';
   pantalla.value = '';
   newNumber= true;
};

borrar.onclick = () => {
   if (numero !== '0'){
      b = numero.split('');
      b.pop();
      numero = b.join('');
      pantalla.value = numero;
   };
};
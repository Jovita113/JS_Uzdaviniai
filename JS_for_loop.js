//1.Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

// for (let i = 0; i < 5; i++) {
//   console.log ("Labas");
// }


//2.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).

// for (let i = 0; i < 5; i++) {
//   console.log (i);
// }


//3.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).

// for (let i = 0; i < 41; i++) {
//   if (i%10 ===0)
//   console.log (i);
// }


//4.Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).

// for (let i = 49; i < 54; i++) {
//   console.log (i);
// }


//5.Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).

// for (let i = 0; i < 5; i++) {
// console.log(Math.floor(Math.random() * 10)+1);
// }


//6.Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.

// for (let i = 1; i <=20; i++) {
//   if (i%3 !== 0) 
//   console.log (i);
// } 


//7.Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.
//first 

// let x = 8;
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const newArr = numbers.map(myFunction);

// function myFunction(num) {
//   return num * x;
// }
// console.log(newArr);

// second

// let x=8;
// for(let i=1;i<11;i++) {
//   console.log(x*i);
// }


//8.Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.

// let n=1;
// let x=2.54;

// for (let i=0; i<n; i++) {
//   console.log(x*n + "cm");
// }

//9.Bankas moka 2% metinių palūkanų. Indėlininkas pasidėjo į banką 100e. Sudarykite kasmetinę banko atskaitą klientui iki n metų.
//Ataskaitoje pateikite: metus, palūkanas, indėlį.

// let n=10;
// let x=100;   //indėlis
// let c=x * 0.02; //paūkanos

// for(let i=0; i<n; i++){
//   console.log(x+c*n);
// }


//10.Keliamieji metai turi 366 dienas, paprastieji–365. Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4.
// Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –paprastieji. 
//Raskite visus mūsų eros keliamuosius metus.function rand(min, max){Return Math.floor(Math.random()*(max-min+1)+min);


function rand(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}
console.log();

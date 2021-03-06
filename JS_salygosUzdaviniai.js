"use strict";

// 1. Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
// Neigiamas –„Blogas“, teigiamas „Geras“. Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
/*
 var n = 20;
 if (n > 0) {
   console.log("Skaičius geras");
} else {
    console.log("Skaičius blogas");
}
*/

// 2. Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. Sudarykite programą, kuri nustatytu, 
// kaip turi pasielgti mokinys? Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. 
// Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
/*
var n = 2;
if (n == 2) {
    console.log("Palaukite");
} else if (n == 3) {
    console.log("Sustokite");
} else 
    console.log ("Eikite");
*/

// 3. Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. 
// Gintautas turi d dėžių ir k knygų. Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos 
// tilps į dėžes, jei į vieną dėžę telpa po n knygų. Pasitikrinkite: Kai d=2, k=8, n=5 tuomet ekrane turi
// būti rodomas pranešimas: Knygos telpa į dėžes; kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: 
// Knygos netelpa į dėžes.
/* 
 let d = 3;
 let k = 18;
 let n = 5;
 if (d * n >= k ) {
    console.log("Knygos telpa į dežes");
} else {
    console.log("Knygos netelpa į dežes");
} 
*/

// 4. Duoti du sveikieji skaičiai a ir b. Parašykite programą, kuri didesnį skaičių pamažintu vienetu,
// o mažesnį padidintu vienetu.
/*
let a = 10;
let b = 8;
if (a > b) {
    console.log (a - 1);
} else if (b > a) {
   console.log (b + 1);
} else {
    console.log ("Skaičiai lygūs");
}
*/

//5. Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. Parduotuvėje porcija ledų kainuoja p centų. 
// Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. 
// Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. Gali prireikti panaudoti
// Math.floor() funkciją.
/*
   let c = 50;
   let p = 20;
   let m = c % p;
   let k = c / p;
    console.log(Math.floor(k));
    console.log(m);
*/
   

//6. .Yra n degtukų. Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį.
// Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. Pasitikrinkite: 
// jei n = 6, turi būti: Trikampį sudėlioti galima. jei n = 4, turi būti: Trikampį sudėlioti negalima.
/*
 let n = 4;
 if (n%3 < 1) {                                                                                                                                   
    console.log("Trikampi sudėlioti galima");
 } else {
    console.log("Trikampio sudėlioti negalima");
 }
*/


//7. Parašykite programą, kuri žinantmėnesio numerį n atspausdintų to mėnesio dienų kiekį d. 
//(tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
/*
let n = 2;
if (n == 2) {
    console.log("28");
} else if (n == 4 || n ==6 || n ==8 || n==10 || n==12) {
    console.log("30");
} else {
    console.log("31");
}*/



//8. Du broliai nesutaria, kuriam tvarkyti kambarį. Jie meta kauliuką. Jei iškrenta skaičius 1, 3 arba
// 5 –kambarį tvarko jaunėlis, jei 2, 4 arba 6 –vyresnėlis. Parašykite programą, kuri įvedus iškritusį skaičių k,
// ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, arba „Kambarį tvarkys vyresnėlis“.
//Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. Kai k = 4, ekrane turi būti: 
//Kambarį tvarkys vyresnėlis.
/*
let k = 4;
if (k ==1 || k ==3 || k==5) {
    console.log ("Kambarį tvarkys jaunėlis");
} else  {
    console.log ("Kambarį tvarkys vyresnėlis")
}*/


//9. Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. 
//Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris.
// Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. Jei metai neolimpiniai, 
//turi būti spausdinama „Metai neolimpiniai“. Pasitikrinkite. Kai m = 1904, turi būti spausdinama: 
//n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.
/*
let m = 2016;

if (m % 4 ===0) {
    console.log ("Metai olimpiniai");
    console.log (((m - 1896)/4)+1)
} else {
    console.log ("Metai neolimpiniai");
}
*/

//10. Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. Į gimnaziją Petro kelionė trunka m2 minučių. 
//Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų 
//ir m minučių. Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; 
//jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.
/*
let v1 = 8;
let m1 = 29;
let m2 = 23;
let v = 9;
let m = 5;
let answer = m2-((v * 60 + m) - (v1 * 60 + m1));
if (answer >= 0) {
    console.log("Petras į pamoką pavėluos");
} else {
    console.log("Petras į pamoką nepavėluos");
}
*/

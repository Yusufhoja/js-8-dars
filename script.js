// let a=["azizhoja","yusufhoja","saidakbar","suhrob"]
// console.log(a.toUpperCase);
// var sozlar = ["salom", "yusufhoja", "saidakbar", "suhrob", ];

// for (var i = 0; i < sozlar.length; i++) {
//     console.log(sozlar[i].toUpperCase());
// }
// var sozlar = ["salom", "dunyo", "bugun", "yaxshi", "kun"];
// var i = 0;

// while (i < sozlar.length) {
//     console.log(sozlar[i].toUpperCase());
//     i++;
// }
   
// let number =[Math.round(Math.random()*10)]
// let pustoy=[];

// for (i = 0; i< number.length; i++){
//     if (number % 2 == 0){
//         pustoy.push(number);
//         console.log(pustoy);
//     }
// }
// console.log(number);
// 10 ta tasodifiy sonni generatsiya qilish
var randomSonlar = [];
for (var i = 0; i < 10; i++) {
    randomSonlar.push(Math.floor(Math.random() * 100) + 1); 
}


var bolinadiganSonlar = [];
for (var i = 0; i < randomSonlar.length; i++) {
    if (randomSonlar[i] % 2 === 0) {
        bolinadiganSonlar.push(randomSonlar[i]);
    }
}

console.log(randomSonlar, "Boshlanishdagi array");
console.log(bolinadiganSonlar, "juft sonlarga ajratilgan array");

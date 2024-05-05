const readline = require('readline');
let rl = readline.createInterface(
    process.stdin, process.stdout);
/*const gun = (a) => {

    switch (a) {
        case "pazartesi":
            console.log("pazartesiyi seçtiniz.");
            break;
        case "sali":
            console.log("Salıyı seçtiniz.");
            break;
        case "carsamba":
            console.log("Çarşamba seçtiniz.");
            break;
        case "persembe":
            console.log("Perşembe seçtiniz.");
            break;
        case "cuma":
            console.log("Cuma seçtiniz.");
            break;
        case "cumartesi":
            console.log("Cumartesi seçtiniz.");
            break;
        case "pazar":
            console.log("Pazar seçtiniz.");
            break;
        default:
            console.log("Böyle bir gün yok")
    }
}

rl.question('Gün girin lütfen(türkçe karakter kullanma):', (gunsec) => {
    gun(gunsec)
    rl.question('Ay girin:(tr karakterlerle)',(ays)=>{
        ay(ays)
     })
    
})
// ----------------------------------------------------------------------------------------------------
const ay = (c) => {
    switch (c) {
        case "Ocak":
            console.log("31 gün")
            break;
        case "Şubat":
            console.log("29")
            break;
        case "Mart":
            console.log("30")
            break;
        case "Nisan":
            console.log("30")
            break;
        case "Mayis":
            console.log("30")
            break;
        case "Haziran":
            console.log("31")
            break;
        case "Temmuz":
            console.log("30")
            break;
        case "Ağustos":
            console.log("31")
            break;
        case "Eylül":
            console.log("31")
            break;
        case "Ekim":
            console.log("30")
            break;
        case "Kasım":
            console.log("30")
            break;
        case "Aralık":
            console.log("Hatalı Giriş Yaptınız")
            break;

        default:
            console.log('Yanlış seçim')

    }

}
// ----------------------------------------------------------------------------------------------------*/
/*var top=0
var dizi=[1,8,9,2,5,45]
dizi.forEach((a)=> {   
    top+=a})
console.log(top/dizi.length)*/



/*rl.question('Sayı giriniz:',(a)=>{

    let kare=a*a
    let kup=kare*a
    console.log(a,`sayısının Karesi:${kare}`,
                a,`sayısının Küpü:${kup}`)

})*/

/*for(let i=1; i<11; i++){
    console.log(i)

}*/

/*rl.question('Bir sayı giriniz:',(al)=>{
    while(al>0){
        console.log(al)
        al--
    }

})*/


// const dizi=[1,2,15,45,8,9,3,7,4,6]
// var c=0
// /*var a=dizi.map((c)=>a+=c)
// console.log(a[a.length-1])*/
// for(let a=0; a<dizi.length; a++){
//     let b=dizi[a];
//     c+=b
// }
// console.log(c)*/

//-----------------------------------------------------------

/*const dizi=[1,2,15,45,8,9,3,7,4,6]
var tek=dizi.map((a)=>{
    if(a%2!=0){
        return a
    }
})
var cift=dizi.map((b)=>{
    if(b%2==0){
        return b
    }

})
console.log(tek)
console.log(cift)*/

//------------------------------------------------------

/*const dizi=[1,2,15,45,8,9,3,7,4,6]
let tek=[];
let cift=[]; 

for(let i=0; i<dizi.length;i++){
    if(dizi[i]%2===0){
    cift.push(dizi[i])  
    }
    else{
    tek.push(dizi[i])
    }
}
console.log('tek sayıları:',tek)
console.log('çift sayıları:',cift)*/

//------------------------------------------------------------------------

/*const ogrenci={
    ad:'Mustafa',
    soyad:'Teker',
    sinif:'4.sınıf'
}
    ogrenci.yas='24'
    console.log(ogrenci)*/

//------------------------------------------------------------------------


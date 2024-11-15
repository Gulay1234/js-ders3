let b = 7;
let str = String(b)
console.log(typeof(str))


let a = "aple";
let num = Number(a)
console.log(typeof(num))


let eded = +prompt("Bir eded daxil edin")
if (eded>0) {
    console.log("Musbet eded")

} else if(eded<0){

    console.log("Menfi eded")
}
 else {

    console.log("Eded sifirdir")
}




let c = +prompt("Bir eded daxil edin")
if (c<10) {
    console.log("10-dan kicikdir")

} else if(c>10){
    console.log("10-dan boyukdur")
}
 else {
    console.log("10-a beraberdir")
}
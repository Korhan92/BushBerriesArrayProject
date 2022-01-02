let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

function safecontrol(params) {
    const safe = params.every(item => item === "pink")
    if (safe) {
        console.log("you can eat");
    } else {
        console.log("you can't eat");
    }
}
 //safecontrol(bushBerryColours1);
//safecontrol(bushBerryColours2);

 function safe2(params) {
     for (let i =0; i < params.length; i++) {
         const element = params[i];
         if (params[i] === "pink"){
             return "no safe"
         }
         
     }
     return "safe"
 }
 console.log(safe2(bushBerryColours2));
 console.log(safe2(bushBerryColours1));
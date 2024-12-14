function show(){
    let name=prompt("what is your name?");
   alert(`Welcome ${name} to Rieta's Bank`);
}
// else{
// //     alert(`enter a valid age please`)
// // }
let who =document.getElementById("why");
who.addEventListener("click",show);
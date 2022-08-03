//Clouser Demo 

/*function outerFunc(){
    function innerFunc(){
        console.log("Hello!!");
    }
    return innerFunc;
}

var a1 = outerFunc();
a1();*/



// //set count that how many time function called and give message accordinglly
// //if we create new variable and call the same function again then it will start fresh count

// function func(){
//     let cnt = 0;
//     function jFunc(){
//         if(cnt < 1){
//             console.log("You called me 1st time!!");
//             cnt++;
//         }else{
//             console.log("You called me again!!");
//         }
//     }
//     return jFunc;
// }
// var myFunc = func();
// myFunc();
// myFunc();

// var myFunc2 = func();
// myFunc2();
// myFunc2();



//Time

// console.log("Start");
// setTimeout(() => {
//     console.log("Inside");
// },1000);
// for(let i = 1; i<100; i++){
//     console.log("*");
// }
// console.log("End");



//For create random colors

// const body = document.body;
// setInterval(() => {
//     const red = Math.floor(Math.random() * 126);
//     const blue = Math.floor(Math.random() * 126);
//     const green = Math.floor(Math.random() * 126);
//     const rgb = `rgb(${red},${green},${blue})`;
//     body.style.background = rgb;
// },2000);



//Callback hell

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(() => {
//     heading1.textContent = "One";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Two";
//         heading2.style.color = "gray";
//         setTimeout(() => {
//             heading3.textContent = "Three";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Four";
//                 heading4.style.color = "pink";
//                 setTimeout(() => {
//                     heading5.textContent = "Five";
//                     heading5.style.color = "green";
//                     setTimeout(() => {
//                         heading6.textContent = "Six";
//                         heading6.style.color = "yellow";
//                         setTimeout(() => {
//                             heading7.textContent = "Seven";
//                             heading7.style.color = "Cyan";
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);


//Pyramid of doom

// function changeText(element, txt, col, time, onSuccessCallBack, onFailureCallBack){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = txt;
//             element.style.color = col;
//             if(onSuccessCallBack){
//                 onSuccessCallBack();
//             }
//         }else{
//             if(onFailureCallBack){
//                 onFailureCallBack();
//             }
//         }
//     },time)
// }//function Call
// changeText(heading1, "one", "red", 1000, ()=>{
//     changeText(heading2, "two", "green", 1000, ()=>{
//         changeText(heading3, "three", "yellow", 1000, ()=>{
//             changeText(heading4, "four", "gray", 1000, ()=>{
//                 changeText(heading5, "five", "cyan", 1000, ()=>{
//                     changeText(heading6, "six", "violet", 1000, ()=>{
//                         changeText(heading7, "seven", "pink", 1000, ()=>{
//                         }, ()=>{console.log("Heading7 is not exist!!")})
//                     }, ()=>{console.log("Heading6 is not exist!!")})
//                 }, ()=>{console.log("Heading5 is not exist!!")})
//             }, ()=>{console.log("Heading4 is not exist!!")})
//         }, ()=>{console.log("Heading3 is not exist!!")})
//     }, ()=>{console.log("Heading2 is not exist!!")})
// }, ()=> {console.log("Heading1 is not exist!!")}) // check wheather element is exist or not




//promise [solution for callback hell]

const bucket = ['coffee','tea','salt','vegetables','rice'];
const ricePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("salt")&& bucket.includes("vegetables")&& bucket.includes("rice")){
        resolve("Rice!!");
    }else{
        reject("Something missing!!");
    }
})
ricePromise.then(
    (val)=>{
        console.log("Let's eat ", val);
    }
).catch(
    (error)=>{
        console.log(error);
    }
)
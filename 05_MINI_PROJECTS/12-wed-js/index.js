// input & output statements
// let name = prompt("Enter your name:");
// if (name === "admin") {
//     console.log("Welcome Admin");
// } else {
//     console.log("Access Denied");
// }
// //string inside variable declare
// let name_2 = console.log(`Name is ${name}`)
// console.log(name_2)



//define string
// let str ="ADS"
// let str1 = new String("ADARSH")
// console.log(str1)

// let ads = "ADS GOUR"
// console.log(ads)


// console.log(ads.length)
// console.log(ads.charAt(5))
// console.log(ads.charAt(4))



// console.log(ads.slice(2))
// console.log(ads.slice(-2))

// console.log(ads.substring(4,5))
// console.log(ads.substring(5))


// let mystr = "THis is ADarsh"
// console.log(mystr.toUpperCase())

// console.log(mystr.toLowerCase())

// console.log("       ADARSH Gour            ".trim())

//1st way function defining
// function hello(parameter1,parameter2){
//     console.log(parameter1,parameter2)
//     console.log("ADARSH GOUR")

// }
// hello(1,5)

//2nd way
// let myfun = function hello1(name){
//     console.log(`hello ${name} from to harda`)

//     console.log("hello  "+    name     +"GOUR")

// }
// myfun("ADARSH")

//3rd way Arrow function


// let arrowfun = (para1, para2) => {
//     console.log("Hello from arrow function")
//     console.log(para1)
//     console.log(para2)
// }

// arrowfun("ADS","VIVEK")

//Example of another arrowfunction

// let arr_fun = (price,discount)=>{
//     console.log(`Price is ${price}`)
//     console.log(`Discount is ${discount}`)
//     return price-discount;
// }
// not print price-discount value
// arr_fun(1500,520)

//print  a price-discount value
// console.log(arr_fun(1500,520))                           

// another example

// ((a,b)=>{
//     console.log(a+b);
// })(5,6);




// //arrow fn wih  varriable calling
//  let fn = (para1,para2) => para1*para2;
//  console.log(fn(5,2))


//Task

// function number() {
//     let num = prompt("Enter a number");

//     for (let i = 1; i <= num; i++) {
//         console.log(i);
//     }
// }

// number();


// function string_1(){
//     let arr= "afhfghjthvv";
//     console.log(arr.length)
//      for(let i = 0; i<=5;i++)
//      {
//          console.log("arr = ",arr[i]);
//      }

// }
// string_1();

// function sath(Num)
// {
//     rem =0;
//     rev=0;
//     for(let i =0;i<= Num;i++)
//     {
//         rem = Num%10;
//         rev = rev*10 + rem;
//         Num = Math.floor(Num/10);


//     }
//     console.log(rev)
// }
// sath(601);

//scope
//global scope
// let name1 = "ads"

// //function scope
// function hey(){
//     let name2 = "uhji"
//     console.log(name2)
// }
// //bolck scope
// {
//     let bolck_scope = "vuh"
//     console.log(bolck_scope)
// }

// console.log(name1)
// console.log(name2)
// console.log(bolck_scope)


// keyword defining

// x = 5
// var x
// console.log(x)

// let y = 5
// console.log(y)

// z = 5 
// let z
// console.log(z)

// j = 565
// const j
// console.log(j)

// const j = 85
// console.log(j)


// //array
// let arr_ads = [5,68,85,69]
// console.log(arr_ads)

// let arr = [15,"bmw","srg",20.3,true,[1.2,58,56,55],
// function duplicate(){
//     console.log("hello from array")
// },(a,b)=>a*b]
// console.log(arr[5])

//inside array function calling
// console.log(arr[7](4,5))

// let cars = ["ads","toyata","od","bww"]
// let arr_0 =[50,52,600,3,5,25]


// console.log(cars)
// console.log(arr_0)
// console.log(cars.length)
// console.log(arr.toString())
// console.log(typeof cars)
// console.log(arr_0.at(2))
// console.log(cars.join(";"))
// cars.push("maserti")
// console.log(cars)
// cars.pop()
// console.log(cars)
// cars.shift()
// console.log(cars)
// cars.unshift("ADFGK")
// console.log(cars)



// console.log(cars.slice(0,2))
// console.log(cars.slice(-1,))
// cars.splice(1,3,"venue","porshe")
// console.log(cars)

// array iteration


// for(let i of cars){
//     console.log(i)
// }

//Array iteration 
//1st way
// for(let i =0;i<cars.length;i++){
//     console.log(cars[i])
// }


//for i in cars -- in python

// for(let i of cars){
//     console.log(i)
// }


// for(let i of cars){
//     console.log(i)
// }

// console.log("Hello")

// document.getElementById("para")
// console.log(document.getElementsByClassName("cls"))
// console.log(document.getElementsByTagName("a"))

// console.log(document.querySelector("#para"))

// console.log(document.querySelector(".cls"))

// console.log(document.querySelectorAll(".cls"))

// console.log("working")
// // document.getElementById("para").innerHTML = "<h1>Meet My Self</h1>"       
// // document.getElementById("para").textContent

// console.log(para)
// // document.getElementById("ts").style.color= "red"
// // document.getElementById("cls").style.color= "purple"
// // document.getElementById("ts").style.backgroundColor= "lightgray"

// setTimeout(() =>{
//     document.getElementById("para").innerHTML = "<h1>Hey BOYS</h1>" 
// },500)
// setTimeout(() =>{
//     document.getElementById("ts").innerHTML = "Meet My Self"
//     document.getElementById("ts").style.color= "red"
// },700)
// setTimeout(() =>{
//     document.getElementById("name").innerHTML = "SHUBHAM KUAMR" 
//     document.getElementById("name").style.color= "Grey"
// },900)
// setTimeout(() =>{
//     document.getElementById("cls").innerHTML = "Creepy Monster" 
//     document.getElementById("cls").style.color= "purple"
// },1000)


// setTimeout(() =>{
//     document.getElementById("mypic").src = "download.jpg"
// },1400)
// setTimeout(() =>{
//     document.getElementById("mypic").src = "wolf.jpg"
// },1800)
// setTimeout(() =>{
//     document.getElementById("mypic").src = "deadlock.jpg"
// },2200)


// // JavaScript Events

// // Function called when the third button is clicked
// function displayDate() {

//     document.getElementById("demo").innerHTML = Date();

// }

console.log("working");


let clickBtn = document.getElementById("clickBtn");

clickBtn.addEventListener("click", function () {

    document.getElementById("clickOutput").innerHTML =
        "Button Clicked!";

});


let mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", function () {

    document.getElementById("mouseOutput").innerHTML =
        "Mouse is over the box!";

});



function showDate() {

    document.getElementById("dateOutput").innerHTML = Date();

}

function foo(){
    let container = document.getElementsByClassName("cot")[0]
    
    container.style.backgroundColor = "red"
}


let btn = documnet.querySelector('#toggle');
let body = documnet.querySelector("body");

btn.addEventListener('click', function(event){
    if(btn.innerHTML === "Dark"){
    console.log(typeof btn);
    console.dir(typeof btn);
    body.style.backgroundColour = 'black';
    body.style.colour = 'white';
    }else{
        btn.innerHTML = "Dark";
        body.style.backgroundColour = 'white';
        body.style.colour = 'black';
    }
})
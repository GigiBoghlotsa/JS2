//1)
//დაწერეთ პატარა ბიოგრაფია თქვენს შესახებ და მაქსიმალურად ჩაშალეთ ცვლადებად და console-ში უნდა მივიღო სრული ტექსტი
//მაგალითად უნდა შეიცავდეს ინფორმაციას(firstName, lastName, age, job, skills,address) გამოიყენეთ template literal მიდგომა

//answer:

let firstname = 'gigi'
let lastname  = 'boghlotsishvili'
let age = 18
let job = 'web developer'
let skills = 'sing'
let adress = 'georgia , tbilisi'
let user = `hello, my name is ${firstname} 
my lastname is ${lastname} 
i am ${age} years old
 i work as a ${job} 
 i ${skills} very well 
  i live in ${adress}`
console.log(user)



//2)
//დაწერეთ პროგრამა, რომელიც იყენებს ლოგიკურ ოპერატორებს (&&, ||, ! ===)
//იმის დასადგენად, არის თუ არა მოცემული წელი 2023 ან უკვე 2024; რამენაირად გამოთვალეთ და დაწერეთ ლოგიკა
// ყველა ინფივიდულაურად დაწერეს წესით!!

//answer:
let currentyear=2024

let year =2023

let year2024 = currentyear === 2024
let year2023 = year < currentyear ===2023

if (year2024 > year2023) {
    console.log ("year is 2024") 
} 
if (year2024 < year2023) {
    console.log ("year is 2024") 
}



//3)ააწყვეთ პატარა counter ლოგიკა სადაც გამოიყენებთ მაგალითად let x = 10; x++, x-- რომლის მიხედვითაც increment ერთ
// console-ში მეორე console-ში კი decrement!!
let newyear = 2024 
let futureyear = newyear ++
let lastyear = newyear-- 

console.log(lastyear) 
console.log(futureyear)

let x = 21
let y = x++
let z = x--
console.log (y)
console.log (z)



//4)
// let a = 10;
// let b = 12;
//
// let andOperator = a < 9 && b >= 11; //result --> : false arcerti piroba ar sruldeba aq ki unda shesruldes orive
// let orOperator = a > 11 0 || b < 10; //result --> : false 
// let notOperator = !(a > 10); //result --> : true  !
// let person = {
//     firstname: "Thien",
//     lastname: "Pham",
//     age: 16

// }
//destructuring
// const {
//     firstname: newname, lastname, age
// } = person
// console.log(newname, lastname, age)
// //firstname: newname đổi tên 
// let fulname = "ahihi"
// let age = 20
// let person = {
//     fulname,
//     age
// } 
// console.log(person);
// import PI, {nameList} from "./math.js"
// const list = ["thien","quang", "chau"]
// nameList(list)
// console.log(PI)
// setTimeout(() => {
//     let name = prompt()
//     console.log(name)
// } ,0)
// let a =1;
// let b = 2; 
// console.log(a+b)
// let myPromise = new Promise(function(resovle, reject) {
//     setTimeout(() => {
//         let dilaynuoc = false;
//         if (dilaynuoc) {resovle("di lay nuoc ve roi")}
//         else {reject("ko di lay nuoc dc")}
//     },3000)
// })
// console.log("quet nha")
// console.log("choi da banh")
// myPromise.then(function(data){
//     console.log(data)
// })
const getaData = () => {
    const request = fetch("https://reqres.in/api/users?page=2")
    request.then((response) => {
        console.log(response)
    })
}
// const rootElement = document.getElementById("root")
// const domElement
const rootElement = document.getElementById("root");
// const ulElement = document.createElement("ul");

// function renderUl(numbers) {
//     for (let i = 0; i < numbers; i++) {
//         const liElement = document.createElement("li")
//         liElement.innerText=`item ${i+1}`
//         ulElement.appendChild(liElement)
//     }
//     rootElement.appendChild(ulElement)
// }
// renderUl(2)
// console.log("React", React)
// const reactElement = React.createElement(
//   "h1",
//   {
//     className: "greeting",
//     id: "greeting",
//     style: {
//       color: "red",
//     },
//   },
//   //   React.createElement(
//   //       "li", {}, "hello"
//   //   )
//   [
//     React.createElement("span", {}, React.createElement("span", {}, "Hello 1")),
//     React.createElement("span", {}, React.createElement("span", {}, "Hello 2")),
//     React.createElement("span", {}, React.createElement("span", {}, "Hello 3")),
//   ]
// );
// const rootReactElement = ReactDOM.createRoot(rootElement);
// rootReactElement.render(reactElement);
const numbers = [1,2,3,4,5];
let res = numbers.map((number) => {
    return number**2;
})
console.log(res)
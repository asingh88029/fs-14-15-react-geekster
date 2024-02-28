// vannila js approach
// const div = document.createElement("div")

// const h2 = document.createElement('h2')
// h2.innerText = "Hello I am H2"

// const p = document.createElement('p')
// p.innerText = "Hello I am Paragraph"

// div.appendChild(h2)

// div.appendChild(p)

// document.getElementById("root").appendChild(div)


// React Approach

const h2 = React.createElement('h2', { 
    style : {
    backgroundColor: 'red'
}, id: "h2-root", className: "blue-text italic"}, 'Hello I am h2 - React')

// const h2 = document.createElement(h2);
// h2.innerText = 'Hello I am h2 - React';
// h2.style.color = "red";

const p = React.createElement('p', {}, 'Hello I am Paragraph - React')

const div = React.createElement("div", {}, [h2, p])

const flexDivStyle = {
    display : 'flex',
    alignItems : 'center',
    justifyContent: 'center',
    height : '100vh'
}

const flexDiv = React.createElement("div", {
    style : flexDivStyle
}, div)


ReactDOM.render(flexDiv, document.getElementById('root'))



// const App = ()=>{
//     return <h2>Hello</h2>
// }

// Babel 

// const App = ()=>{
//     const h2 = document.createElement("h2")
//     h2.innerText="Hello"
//     return h2
// }
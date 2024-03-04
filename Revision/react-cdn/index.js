const Root = document.getElementById("root");

// const H2 = document.createElement("h2")
// H2.innerText = "I am H2 - Using JS"

// Root.appendChild(H2)

const H2 = React.createElement('input', {
    type : 'text',
    placeholder : 'Enter Value',
    onChange : (e)=>{
        console.log(e.target.value)
    }
}, null)

ReactDOM.render(H2, Root)

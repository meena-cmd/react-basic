// const heading = React.createElement("h6", {id:"heading",abc:"syc"}, "Hello World from React");
//  const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

//<div id="parent">
//  <div id="child1">
    // <h2>this is h1 tag</h2>
    // <h2>i am sibling<h2>
//  </div>
/*  <div id="child2">
       <h3>this is h1 tag</h3>
       <h3>i am sibling<h3>
    </div> */
//</div> 


const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
        React.createElement("h2",{},"this is h2 tag"),
        React.createElement("h2",{},"i am sibling")]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h3",{},"this is h3 tag"),
        React.createElement("h3",{},"i am sibling")])
])
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)


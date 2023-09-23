{/* <div id="Parent">
    <div id="child1">
        <h1>I am tag 1</h1>
        <h2>I am tag 2</h2>
    </div>
    <div id="child2">
        <h1>I am tag 1</h1>
        <h2>I am tag 2</h2>
    </div>
</div> */}


const heading = React.createElement("div",{id : "parent"},
    [
        React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{},"I am tag 1"),
            React.createElement("h2",{},"I am tag 2"),
        ]),
        React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{},"I am tag 1"),
            React.createElement("h2",{},"I am tag 2"),
        ]),
    ]
);

/*
    we can see that react code is lengthy and more complex for implementing same code
    that is why JSX comes in picture.
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading) 
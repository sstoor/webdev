
const Pet = () => {

return React.createElement("div", {}, [

    React.createElement("h2", {}, "Luna"),
    React.createElement("h2", {}, "Dog"),
    React.createElement("h2", {}, "Maltese"),




])
}




const App = () => {

    return React.createElement(
    "div", 
    {},[
    React.createElement("h1", {}, "Adopt Me!"), 
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),

    ]);

};


ReactDOM.render(React.createElement(App), document.getElementById('root'));



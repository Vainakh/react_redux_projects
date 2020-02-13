//import React and React.DOM libraries;
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component;

// const App = function() {
//     return <div>Hi There!</div>;
// }; ===> function based component

const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name" > Enter Name: </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
        </div>
    );
};

//take the react component and show it on the screen;
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom/client';


// const child1= React.createElement('p',{},"i am child 1");
// const child2= React.createElement('p',{},"i am child 2");
// const div = React.createElement('div',{className:'text'},[child1, child2]);

const isMorning = true;
const monrningText = "Good Morning";

const afternoonText = "Good Afternoon";

const handleClick = (state) => {
    console.log("Button clicked",state);
}

const morningElement = <div className='text' onClick={() => handleClick(monrningText)}>{monrningText} it is 8 am </div>;
const afternoonElement = <div className='text'>{afternoonText} it is 6 pm </div>;
const greetingElement= isMorning ? morningElement : afternoonElement;   

const GreetingComponent =  () => {
    return <>
        {greetingElement} i am insie component
    </>;
}       

console.log(GreetingComponent);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(GreetingComponent());   
root.render(<GreetingComponent/>);   
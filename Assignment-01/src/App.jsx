
 import "./app.css";
import FormInput from "./component/FormInput";
import React from 'react';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Registration Form </h1>
      </header>
      <main>
        <FormInput />
      </main>
    </div>
  );
};


export default App;

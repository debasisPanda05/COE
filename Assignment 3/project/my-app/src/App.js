// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import './App.css';
 import VerticalNavbar from './components/Navbar';
  import Body from './components/Body';
   function App() { 
    return (
       <div className='d-flex '> 
       <VerticalNavbar />
        <Body />
         </div>
          );
         } 
          
          export default App;

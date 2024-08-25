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

// export default App;

import React from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseManagement from './components/CourseManagement';

function App() {
    return (
        <div className="App">
            {/* <h1>Course Management</h1>
            <CourseForm />
            <CourseList /> */}

<div className="App">
            <CourseManagement />
        </div>
        </div>
    );
}

export default App;

import './App.css';
import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="all-comp">
        <Sidebar/>
        <Main/>
      </div>
    </div>
  );
}

export default App;

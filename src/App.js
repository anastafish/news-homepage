import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Cards } from './components/Cards';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-3 grid-rows-[repeat(10,1fr)] sm:px-20 px-7 sm:py-11 py-7 h-[100vh]">
      <Navbar />
      <Main />
      <Cards />
    </div>
  );
}

export default App;

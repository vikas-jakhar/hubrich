import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Fault01 from './Components/Fault01';
import Self from './Components/Self';
import Book02 from './Components/Book02';

function App() {
  return (
    <main className=' overflow-hidden'>
      <Header />
      <Fault01 />
      <Self />
      <Book02 />
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import PosterCarousel from './Components/PosterCarousel/PosterCarousel';
import Home from './Pages/Home';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Allroutes from './Allroutes/Allroutes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
         <Allroutes/>
       </BrowserRouter>
       </Provider>
    </div>
  );
}

export default App;

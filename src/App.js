import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home, Cart, CategoryProduct, ProductSingle, Search } from './pages/index';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer/Footer'
import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Sidebar />
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

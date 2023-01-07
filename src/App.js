import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from './components/Customer/CustomerList/CustomerList';
import CustomerForm from './components/Customer/CustomerForm/CustomerForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CustomerList />}>
        </Route>
        <Route path='form' element={<CustomerForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

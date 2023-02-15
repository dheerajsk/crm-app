import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SecuredRoutes from "./components/SecuredRoutes/SecuredRoutes";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CustomerList from './components/Customer/CustomerList/CustomerList';
import CustomerForm from './components/Customer/CustomerForm/CustomerForm';
import SignUp from './components/SignUp/SIgnUp';
import SignIn from './components/SignIn/SignIn';
import UserList from './components/User/UserList';
import UserForm from './components/User/UserForm/UserForm';
import TicketList from './components/Ticket/TicketList/TicketList';
import TicketForm from './components/Ticket/TicketForm/TicketForm';

import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';  
import NavBar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
       {/* <NavBar /> */}
       
     <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <SecuredRoutes>
          <CustomerList />
        </SecuredRoutes>
        }>
        </Route>

        <Route path='/tickets' element={
        <SecuredRoutes>
          <TicketList />
        </SecuredRoutes>
        }>
        </Route>

        <Route path='/ticketform' element={
          <SecuredRoutes>
            <TicketForm />
          </SecuredRoutes>
        }>
        </Route>

        <Route path='/ticketform/:desc' element={
          <SecuredRoutes>
            <TicketForm />
          </SecuredRoutes>}>
        </Route>

        <Route path='/users' element={
        <SecuredRoutes value="10">
          <UserList />
        </SecuredRoutes>
        }>
        </Route>
        <Route path='/userForm' element={
        <SecuredRoutes>
          <UserForm />
        </SecuredRoutes>
        }>
        </Route>
        {/* <Route path='/signup' element={<SignUp />}>
        </Route> */}
        <Route path='/signin' element={<SignIn />}>
        </Route>
        <Route path='form' element={
         <SecuredRoutes>
            <CustomerForm />
        </SecuredRoutes>
      }>
        </Route>
        <Route path='form/:customerName' element={<CustomerForm />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

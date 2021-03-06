import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import AddPackage from './components/Dashboard/AddPackage/AddPackage';
import AddReview from './components/Dashboard/AddReview/AddReview';
import PackageBook from './components/Dashboard/PackageBook/PackageBook';
import PackageBookingList from './components/Dashboard/PackageBookingList/PackageBookingList';
import OrderList from './components/Dashboard/OrderList/OrderList';
import ManageService from './components/Dashboard/ManageService/ManageService';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <UserContext.Provider value={{ user: [loggedInUser, setLoggedInUser], admin: [isAdmin, setIsAdmin] }}>
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addPackage">
            <AddPackage></AddPackage>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/book">
           <PackageBook></PackageBook>
          </Route>
          <Route path="/bookingList">
           <PackageBookingList></PackageBookingList>
          </Route>
          <Route path="/orderlist">
           <OrderList></OrderList>
          </Route>
          <Route path="/manageService">
           <ManageService></ManageService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;

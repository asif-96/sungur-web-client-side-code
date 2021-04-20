import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './component/Login/Login';
import Home from './component/Home/Home';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import AdminDashboard from './component/AdminDashboard/AdminDashboard';
import AddService from './component/AddService/AddService';
import UserDashboard from './component/UserDashboard/UserDashboard';
import PurchaseList from './component/PurchaseList/PurchaseList';
import UserReview from './component/UserReview/UserReview';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import ShowPurchaseBundle from './component/ShowPurchaseBundle/ShowPurchaseBundle';
import Message from './component/Message/Message';
import ErrorMessage from './component/ErrorMessage/ErrorMessage';


export const UserContext = createContext()



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});


  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <div className="App">
        <Router>
          <Message></Message>
          <Header user={loggedInUser}></Header>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/userDashboard">
              <UserDashboard></UserDashboard>
            </PrivateRoute>
            <PrivateRoute path="/admindashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <PrivateRoute path="/purchaseList/:id">
              <PurchaseList user={loggedInUser}></PurchaseList>
            </PrivateRoute>
            <PrivateRoute path="/purchaseHistory">
              <ShowPurchaseBundle></ShowPurchaseBundle>
            </PrivateRoute>
            <Route path="/review">
              <UserReview></UserReview>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <ErrorMessage></ErrorMessage>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;

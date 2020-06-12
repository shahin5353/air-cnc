import React, {useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ChooseApartment from './components/ChooseApartment/ChooseApartment';
import ApartmentDetail from './components/ApartmentDetail/ApartmentDetail';
import Booking from './components/Booking/Booking';


const App = () => {
  const [formData, setFormData] = useState(null);
  const [apartment, setApartment] = useState(null);
  return (
    <>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home formData={setFormData} />
          </Route>
          <Route exact path="/choose-apartment">
            {
              formData ?
                  <ChooseApartment formData={formData}/>
                :
                <Redirect to="/" />
            }
          </Route>
          <Route exact path="/apartment/:id">
            {
              formData ?
                  <ApartmentDetail apartment={setApartment} formData={formData}/>
                :
                <Redirect to="/" />
            }
          </Route>
          <Route exact path="/booking">
          {
              formData ?
                <Booking  apartment={apartment} formData={formData}/>
                :
                <Redirect to="/" />
            }
            
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
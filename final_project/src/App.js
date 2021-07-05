import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Navigation from './components/nav.js';
import MultiCarouselPage from './components/homePage.js';
import NewBusiness from './components/newBusiness';
import OpeningPage from './components/openingPage.js';
import MyFavorites from './components/myFavorites.js';
import About from './components/aboutUs.js'
import ShowBuisneses from './components/showBuisneses.js';
import './App.css';
import dataBase from './data/db.json';
import background from './pics/background.jpg'
import c1 from './pics/c1.jpg'
import c2 from './pics/c2.jpg'
import c3 from './pics/c3.jpg'
import c4 from './pics/c4.jpg'
import c5 from './pics/c5.jpg'
import c6 from './pics/c6.jpg'
import c7 from './pics/c7.jpg'
import d1 from './pics/d1.jpg'
import d2 from './pics/d2.png'
import d3 from './pics/d3.jpeg'
import d4 from './pics/d4.jpg'
import d5 from './pics/d5.jpg'
import d6 from './pics/d6.jpg'
import h1 from './pics/h1.png'
import h2 from './pics/h2.jpg'
import h3 from './pics/h3.png'
import h4 from './pics/h4.png'
import h5 from './pics/h5.jpg'
import h6 from './pics/h6.jpg'
import h7 from './pics/h7.jpg'
import f1 from './pics/f1.png'
import f2 from './pics/f2.jpg'
import f3 from './pics/f3.jpg'
import f4 from './pics/f4.jpg'
import f5 from './pics/f5.png'
import m1 from './pics/m1.png'
import m2 from './pics/m2.png'
import m3 from './pics/m3.jpg'
import m4 from './pics/m4.jpg'
import m5 from './pics/m5.png'
import m6 from './pics/m6.png'
import m7 from './pics/m7.png'
import s1 from './pics/s1.jpg'
import s2 from './pics/s2.jpg'
import s3 from './pics/s3.jpg'
import s4 from './pics/s4.jpg'
import s5 from './pics/s5.png'
import s6 from './pics/s6.jpg'
import c8 from './pics/c8.jpg'
import c9 from './pics/c9.jpg'
import c10 from './pics/c10.jpg'
import c11 from './pics/c11.png'
import c12 from './pics/c12.jpg'
import c13 from './pics/c13.jpg'
import c14 from './pics/c14.png'
import c15 from './pics/c15.jpg'
import d7 from './pics/d7.jpg'
import d8 from './pics/d8.jpg'
import d9 from './pics/d9.png'
import d10 from './pics/d10.jpg'
import f6 from './pics/f6.jpg'
import f7 from './pics/f7.png'
import f8 from './pics/f8.jpg'
import f9 from './pics/f9.jpg'
import f10 from './pics/f10.jpg'
import f11 from './pics/f11.jpg'
import f12 from './pics/f12.jpg'
import h8 from './pics/h8.jpg'
import h9 from './pics/h9.png'
import h10 from './pics/h10.jpg'
import h11 from './pics/h11.jpg'
import m8 from './pics/m8.jpg'
import m9 from './pics/m9.jpg'
import m10 from './pics/m10.jpg'
import m11 from './pics/m11.jpg'
import m12 from './pics/m12.jpg'
import m13 from './pics/m13.jpg'
import m14 from './pics/m14.jpg'
import m15 from './pics/m15.webp'
import m16 from './pics/m16.jpg'
import m17 from './pics/m17.jpg'
import m18 from './pics/m18.jpg'
import s7 from './pics/s7.webp'
import s8 from './pics/s8.jpg'
import s9 from './pics/s9.jpg'

const img = [c1, c2, c3, c4, c5, c6, c7, d1, d2, d3, d4, d5, d6, h1, h2, h3, h4, h5, h6, h7,
  f1, f2, f3, f4, f5, m1, m2, m3, m4, m5, m6, m7, s1, s2, s3, s4, s5, s6, c8, c9,
  c10, c11, c12, c13, c14, c15, d7, d8, d9, d10, f6, f7, f8, f9, f10, f11, f12,
  h8, h9, h10, h11, m8, m9, m10, m11, m12, m13, m14, m15, m16, m17, m18, s7, s8, s9]

dataBase.businessCards.forEach((item, index) => item.logo = img[index])

function App() {

  const businessCards1 = dataBase.businessCards;
  const users = dataBase.users;
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState(user ? [user.favorites] : []);
  const [businessCards, setBusinessCards] = useState(businessCards1)

  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Switch>
          <Route exact path="/">
            <OpeningPage user={user} setUser={setUser} users={users} />
          </Route>
          <Route path="/homePage" render={() => <MultiCarouselPage />} />
          <Route path="/showBuisness" render={() => <ShowBuisneses items={businessCards} favorites={favorites} setFavorites={setFavorites} user={user} setUser={setUser} />} />
          <Route path="/favorites">
            <MyFavorites user={user} setUser={setUser} items={businessCards} />
          </Route>
          <Route path="/aboutUs">
            <About />
          </Route>
          <Route path="/newBusiness" >
            <NewBusiness businessCards={businessCards} setBusinessCards={setBusinessCards} items={businessCards} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
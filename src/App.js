import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Login from './component/login';
import Signup from './component/signup';
import Signfind from './component/signfind';
import Unsignup from './component/unsignup';
import Main from './component/main';
import Profile from './component/profile';
import Alarm from './component/alarm';
import Soloplay from './component/soloplay';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signfind" element={<Signfind />} />
          <Route path="/unsignup" element={<Unsignup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/alarm" element={<Alarm />} />
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/gemstore" element={<Gemstore />} />
          <Route path="/soloplay" element={<Soloplay />} />
          <Route path="/multi" element={<Multi />} />
          <Route path="/deco" element={<Deco />} />

        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

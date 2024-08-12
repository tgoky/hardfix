import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Sidebar from './Sidebar';
import './App.css';

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Animation for the menu bar
  const menuBarSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    config: { duration: 800 },
  });

  // Animation for the buttons
  const buttonSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 800 },
    delay: 400,
  });

  // Animation for the footer
  const footerSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    config: { duration: 800 },
    delay: 600,
  });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="App">
      <animated.div style={menuBarSpring} className="menu-bar">
        <img src="/logo.PNG" alt="Logo" className="logo" width="300px" height="100px" />
 
        <div className="icon" onClick={toggleSidebar}>
          <div>
            <div className="ebutton">
              <animated.button className="ebutton">Enter App</animated.button>
            </div>
          </div>
        </div>
      </animated.div>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <div className="description">
        <p>Welcome to Aequor Finance, Aequor Finance is a revolutionary treasury-backed DeFi protocol designed to be the cornerstone of a new economic system on Solana.</p>
      </div>
      <div className="buttons">
        <animated.button style={buttonSpring} className="button">Enter App</animated.button>
        <animated.button style={buttonSpring} className="button">Documentation</animated.button>
      </div>
      <animated.footer style={footerSpring} className="footer">
        <p>© 2024 Aequor Finance. All Rights Reserved.</p>
        <p>Follow us on <a href="#">Twitter</a> | <a href="#">LinkedIn</a> | <a href="#">GitHub</a></p>
      </animated.footer>
    </div>
  );
};

export default App;

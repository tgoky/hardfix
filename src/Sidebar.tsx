import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Sidebar.css';

// Define the types for the Sidebar props
interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  // Animation for the sidebar
  const sidebarSpring = useSpring({
    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
    config: { duration: 300 },
  });

  return (
    <animated.div className="sidebar" style={sidebarSpring}>
      <button className="close-button" onClick={closeSidebar}>×</button>
      <nav>
        <ul>
          <li><a href="#docs">Docs</a></li>
          <li><a href="#stake">Stake</a></li>
          <li><a href="#social">Social</a></li>
          <li><a href="#bank">Bank</a></li>
        </ul>
      </nav>
    </animated.div>
  );
};

export default Sidebar;

import React, {useState} from 'react';
import './Dropdown.css'; // Import your CSS file for styling

const Dropdown = () => {
    const [isLeft, setIsLeft] = useState(true);

    const toggleDropdownDirection = () => {
      setIsLeft(!isLeft);
    };
  
    return (
      <div className="dropdown-container">
        {/* Down Arrow Icon */}
        <div className="dropdown-icon" onClick={toggleDropdownDirection}>
          ▼
          {/* Dropdown Menu */}
          <div className={`dropdown-menu ${isLeft ? 'left' : 'right'}`}>
            <a href="/">Option 1</a>
            <a href="/">Option 2</a>
            <a href="/">Option 3</a>
          </div>
        </div>
      </div>
    );
};

export default Dropdown;
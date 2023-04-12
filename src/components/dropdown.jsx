import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el dropdown está abierto o cerrado

  const handleMouseEnter = () => {
    setIsOpen(true); // Activar el dropdown cuando el cursor entra en el enlace
  }

  const handleMouseLeave = () => {
    setIsOpen(false); // Desactivar el dropdown cuando el cursor sale del enlace
  }

  return (
    <div>
      <a
        href="#hobbies"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>Hobbies</span> <img src={require('./img/hobbies.png')}/>
      </a>
      {isOpen && (
        <div
            className='dropdownOptions'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          <br/><a href="#hobbies">Sports</a><br/><br/>
          <a href="#games">Games</a><br/><br/>
          <a href="#learn">Learn</a><br/><br/>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
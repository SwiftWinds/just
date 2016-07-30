import React from 'react';

export default ({onSelect}) => {
  return (
    <section style={{flex: 1}} className="main-content">
      <ul>
        <li style={{listStyle: 'none'}}>Objects</li>
        <ul>
          <li style={{listStyle: 'none'}} onClick={onSelect}>just-extend</li>
        </ul>
        <ul>
          <li style={{listStyle: 'none'}} onClick={onSelect}>just-filter-object</li>
        </ul>
      </ul>
    </section>
  );
}
     

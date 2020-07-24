import React from 'react';

const Planet = ({ planet: { name, population, terrain } }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>population- {population}</p>
      <p>terrain- {terrain}</p>
    </div>
  );
};

export default Planet;

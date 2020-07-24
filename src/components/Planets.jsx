import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log('Planets -> data', data);
  return (
    <div>
      <h2>Planets</h2>
      {status === 'error' && <div>Error while loading data</div>}
      {status === 'loading' && <div>loading data...</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.diameter} planet={planet} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Planets;

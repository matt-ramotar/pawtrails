import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';

export default function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(
    () => async () => {
      const res = await fetch('/api/trails');
      const data = await res.json();
    },
    []
  );

  return (
    <>
      <div>filter</div>
      <div>{<DataTable data={data}></DataTable>}</div>
    </>
  );
}

// const SearchContainer = () => {
//   const dispatch = useDispatch();
//   const pokemon = useSelector(state => state.pokemon.current);
//   const getOnePokemon = id => dispatch(PokemonAction.getOnePokemon(id));

//   return <PokemonDetail pokemon={pokemon} getOnePokemon={getOnePokemon} />;
// };

// export default PokemonDetailContainer;

// export default function TrailsContainer() {
//   const dispatch = useDispatch();
//   const getTrailsDispatch = () => dispatch(getTrails());
//   const trails = useSelector(state => state.trails.list);
//   return <TrailsPage getTrailsDispatch={getTrailsDispatch} trails={trails} />;
// }

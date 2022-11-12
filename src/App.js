import {Routes,Route} from 'react-router-dom'
import Hero from './Components/Hero';
import Place from './Components/Place';

function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Hero />} />
          <Route path='/place-to-stay' element= {<Place/>}/>
        </Route>
      </Routes>   
    </>
  );
}

export default App;

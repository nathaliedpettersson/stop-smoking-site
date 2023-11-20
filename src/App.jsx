import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Advice from './pages/Advice';
import BodyDamage from './pages/BodyDamage';
import Environment from './pages/Environment';
import ExpensiveHabit from './pages/ExpensiveHabit';
import Help from './pages/Help';
import NotFresh from './pages/NotFresh';

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/tips&rad' element={<Advice />}/>
    <Route path='/skadapakropp' element={<BodyDamage />}/>
    <Route path='/miljopaverkan' element={<Environment />}/>
    <Route path='/dyrt' element={<ExpensiveHabit />}/>
    <Route path='/hjalp' element={<Help />}/>
    <Route path='/intefresh' element={<NotFresh />}/>
  </Routes>
  );
}

export default App;

import './App.css';
import {Route, Routes} from 'react-router-dom'
import LobbyScreen from './screens/Lobby';
import Room from './screens/Room';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LobbyScreen />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </>
  );
}

export default App;

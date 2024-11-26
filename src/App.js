import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import Gathertown from "./components/Gathertown/Home"
import Feed from './components/Feed/Feed';
import Profile from './components/Profile/Profile';
import ChatRoom from './components/ChatRoom/ChatRoom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sidebar/>}>
          <Route index element={<Feed/>}/>
          <Route path='/town' element={<Gathertown/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/messages' element={<ChatRoom/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

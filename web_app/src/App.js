import { Routes, Route } from 'react-router-dom';
import Description from './pages/description/Description';
import Analises from './pages/analises/Analises';
import Dashboard from './pages/dashboard/Dashboard';
import SidebarContextProvider from './context/sidebarContext/SideBarContext.js'
import './App.css';

//importações para teste componentes
import Header from './components/header/Header';
import SideBar from './components/sidebar/SideBar';

function App(){
  return (
    <div className="App">
      <SidebarContextProvider>
        <SideBar />
      </SidebarContextProvider>
    
      <div className='main'>
        <Header/>
        <Routes>
          <Route path='/' element={<Description />} />
          <Route path='/analises' element={<Analises />} />
          <Route path='/dashboard'element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Description from './pages/description/Description';
import Analises from './pages/analises/Analises';
import Dashboard from './pages/dashboard/Dashboard';
import SidebarContextProvider from './context/sidebarContext/SideBarContext.js'
import './App.css';
import MainContainer from './components/main_container/MainContainer';
//importações para teste componentes
import SideBar from './components/sidebar/SideBar';

function App(){
  return (
    <div className="App">
      <SidebarContextProvider>
        <SideBar />
    
      <MainContainer>
       
        <Routes>
          <Route path='/' element={<Description />} />
          <Route path='/analises' element={<Analises />} />
          <Route path='/dashboard'element={<Dashboard />} />
        </Routes>
      </MainContainer>
      </SidebarContextProvider>
    </div>
  );
}

export default App;

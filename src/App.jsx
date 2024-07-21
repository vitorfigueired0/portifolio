import { Header } from './components/core/Header.jsx';
import { StartButton } from './components/core/StartButton.jsx';
import { Body } from './components/core/Body.jsx';
import { Sidebar } from './components/core/Sidebar.jsx';

import { useState } from 'react';

function App() {
  const [started, setStarted] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarEvent = () => {
    console.log(showSidebar);
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='bg-darkMain min-h-screen overflow-hidden'>
      { showSidebar ? <Sidebar onClick={handleSidebarEvent} /> : <Header onClick={handleSidebarEvent} /> }
      
      <div className='mt-20 flex justify-center items-center align-middle min-h-screen overflow-hidden'>
        {started ? <Body /> : <StartButton onClick={() => setStarted(true)} />}
      </div>
      
    </div>
  );
}

export default App;

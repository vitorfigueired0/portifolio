import './App.css';
import { Header } from './components/core/Header.jsx';
import { StartButton } from './components/core/StartButton.jsx';
import { Body } from './components/core/Body.jsx';

import { useState } from 'react';

function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className='bg-darkMain min-h-screen overflow-hidden'>
      <Header />
      <div className='mt-20 flex justify-center items-center align-middle min-h-screen overflow-hidden'>
        {started ? <Body /> : <StartButton onClick={() => setStarted(true)} />}
      </div>
    </div> 
  );
}

export default App;

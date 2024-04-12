import drawer from './assets/drawers.jpg';

import PopoverMenu from './PopoverMenu';
import { useState, useEffect } from 'react';

function App() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  console.log();

  return (
    <div className='w-full h-screen bg-slate-200 grid place-items-center'>
      <div className='mx-6 rounded-xl overflow-hidden bg-white md:flex'>
        <img
          src={drawer}
          alt=''
          className='h-60 w-full object-cover object-top '
        />
        <div className='h-full w-full  pt-12 px-10 pb-5 md:flex md:flex-col'>
          <p className='text-xl font-bold tracking-wide mb-5 text-slate-700'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className='text-lg tracking-wide leading-6 text-slate-500 '>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          {useWindowDimensions().width > 767 && <PopoverMenu />}
        </div>
        {/* profile */}
        {useWindowDimensions().width < 768 && <PopoverMenu />}
      </div>
    </div>
  );
}

export default App;

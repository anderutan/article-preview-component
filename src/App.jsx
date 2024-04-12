import drawer from './assets/drawers.jpg';
import avatar from './assets/avatar-michelle.jpg';
import iconFb from './assets/icon-facebook.svg';
import iconPt from './assets/icon-pinterest.svg';
import iconSh from './assets/icon-share.svg';
import iconTw from './assets/icon-twitter.svg';

function App() {
  return (
    <div className='w-full h-screen bg-slate-200 grid place-items-center'>
      <div className='mx-6 rounded-xl overflow-hidden bg-white'>
        <img
          src={drawer}
          alt=''
          className='h-60 w-full object-cover object-top '
        />
        <div className='h-full w-full  pt-12 px-10 pb-5'>
          <p className='text-xl font-bold tracking-wide mb-5 text-slate-700'>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </p>
          <p className='text-lg tracking-wide leading-6 text-slate-500 mb-8'>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className='flex gap-5 items-center'>
            <img src={avatar} alt='' className='h-12 rounded-full' />
            <div>
              <p className='font-bold text-slate-700'>Michelle Appleton</p>
              <p className='text-slate-400'>28 Jun 2020</p>
            </div>
            <img
              src={iconSh}
              alt=''
              className='w-10 ml-auto bg-slate-200 rounded-full p-2'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

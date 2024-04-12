import drawer from './assets/drawers.jpg';
import avatar from './assets/avatar-michelle.jpg';
import iconFb from './assets/icon-facebook.svg';
import iconPt from './assets/icon-pinterest.svg';
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
          <p className='text-lg tracking-wide leading-6 text-slate-500 '>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        {/* profile */}
        <div className='flex gap-5 items-center px-10 py-5'>
          <img src={avatar} alt='' className='h-12 rounded-full' />
          <div>
            <p className='font-bold text-slate-700'>Michelle Appleton</p>
            <p className='text-slate-400'>28 Jun 2020</p>
          </div>

          <div className='h-10 w-10 flex items-center justify-center bg-slate-200 rounded-full ml-auto cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='13'
              className='text-slate-600 fill-current'
            >
              <path
                fill=''
                d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
              />
            </svg>
          </div>
        </div>
        {/* social media panel */}
        <div className='bg-slate-600 flex items-center px-10 py-5'>
          <p className='text-lg tracking-[0.3em] text-slate-100'>SHARE</p>
          <div className='flex gap-5 ml-5 items-center'>
            <a href='www.google.com' target='_blank' className='cursor-pointer'>
              <img src={iconFb} alt='' />
            </a>
            <a href='www.google.com' target='_blank' className='cursor-pointer'>
              <img src={iconTw} alt='' className='cursor-pointer' />
            </a>
            <a href='www.google.com' target='_blank' className='cursor-pointer'>
              <img src={iconPt} alt='' className='cursor-pointer' />
            </a>
          </div>
          <div className='h-10 w-10 flex items-center justify-center bg-slate-500 rounded-full ml-auto cursor-pointer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='15'
              height='13'
              className='text-slate-200 fill-current'
            >
              <path
                fill=''
                d='M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

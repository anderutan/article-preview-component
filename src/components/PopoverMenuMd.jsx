import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import avatar from '../assets/avatar-michelle.jpg';
import iconFb from '../assets/icon-facebook.svg';
import iconPt from '../assets/icon-pinterest.svg';
import iconTw from '../assets/icon-twitter.svg';

export default function PopoverMenu() {
  return (
    <Popover className='relative'>
      <div className='flex gap-5 items-center px-10 py-5 md:px-0 md:py-10'>
        <img src={avatar} alt='' className='h-12 rounded-full' />
        <div>
          <p className='font-bold text-slate-700'>Michelle Appleton</p>
          <p className='text-slate-400'>28 Jun 2020</p>
        </div>
        <div className='ml-auto'>
          <Popover.Button>
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
          </Popover.Button>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute z-10 w-full -top-[32.5px] left-44'>
              <div className='bg-slate-600 flex items-center justify-center px-5 py-5 rounded-xl w-[65%] relative'>
                <p className='text-lg tracking-[0.3em] text-slate-100'>SHARE</p>
                <div className='flex gap-5 ml-5 items-center'>
                  <a
                    href='www.google.com'
                    target='_blank'
                    className='cursor-pointer'
                  >
                    <img src={iconFb} alt='' />
                  </a>
                  <a
                    href='www.google.com'
                    target='_blank'
                    className='cursor-pointer'
                  >
                    <img src={iconTw} alt='' className='cursor-pointer' />
                  </a>
                  <a
                    href='www.google.com'
                    target='_blank'
                    className='cursor-pointer'
                  >
                    <img src={iconPt} alt='' className='cursor-pointer' />
                  </a>
                </div>
              </div>
              <div className='h-5 w-5 bg-slate-600 rotate-45 -mt-3 absolute left-[52%]'></div>
            </Popover.Panel>
          </Transition>
        </div>
      </div>
    </Popover>
  );
}

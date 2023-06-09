import React from 'react';

function Header() {
  return (
    <div>
      <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 xl:w-50 xxl:w-40'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
          <a href='/' className='flex items-center'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='mr-3 h-6 sm:h-9'
              alt='Flowbite Logo'
            />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
              Jod Builder
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;

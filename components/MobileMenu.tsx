import React from 'react';

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="relative">
      <img
        src="/path/to/your/image.png"
        alt="Mobile Menu Image"
        className={`absolute top-0 left-0 w-40 h-16 ${visible ? 'lg:hidden' : 'hidden lg:block'}`}
       
      />
      <div className="bg-black bg-opacity-30 w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800   flex">
         
          <div className="flex flex-col gap-4">
            <div className="px-3 text-center text-white hover:underline hover:scale-105">
              HOME
            </div>
            <div className="px-3 text-center text-white hover:underline hover:scale-105">
              SERIES
            </div>
            <div className="px-3 text-center text-white hover:underline hover:scale-105">
              FILMS
            </div>
            <div className="px-3 text-center text-white hover:underline hover:scale-105"  >
              NEW & POPULAR
            </div>
            <div className="px-3 text-center text-white hover:underline hover:scale-105">
              MY LIST
            </div>
            <div className="px-3 text-center text-white hover:underline hover:scale-105">
              BROWSE BY LANGUAGES
            </div>
          </div>
        </div>
      </div>
     
  );
}

export default MobileMenu;

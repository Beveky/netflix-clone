import React from 'react';
import { useRouter } from 'next/router';
interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  const router = useRouter();

  if (!visible) {
    return null;
  }

  const redirectToWishlist = () => {
    router.push('/wishlist');
  };
  const redirectToHome = () => {
    router.push('/');
  };
  const redirectToNewest = () => {
    router.push('/newest');
  };

  return (
    <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-4">

        <button onClick={redirectToHome}>
        <div className="px-3 text-center text-white hover:underline">
          Home
        </div>
        </button>
        <div className="px-3 text-center text-white hover:underline">
          Series
        </div>
        <div className="px-3 text-center text-white hover:underline">
          Films
        </div>

        <button onClick={redirectToNewest}>
        <div className="px-3 text-center text-white hover:underline">
          New & Popular
        </div>
        </button>

        <button onClick={redirectToWishlist}>
        <div className="px-3 text-center text-white hover:underline">
          My List
        </div>
        </button>
  
      </div>
    </div>
  )
}

export default MobileMenu;

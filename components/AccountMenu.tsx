import { CgDanger } from "react-icons/cg"; 
import { signOut } from 'next-auth/react';
import React from 'react';

import useCurrentUser from '@/hooks/useCurrentUser';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  const { data: currentUser } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black bg-opacity-50 w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex rounded-md">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="/images/default-blue.png" alt="" />
          <p className="text-white text-sm group-hover/item:underline">{currentUser?.name}</p>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div onClick={() => signOut()} className="px-3 text-center text-white text-sm flex items-center hover:scale-110 hover:text-red-500">
        <CgDanger className="text-xl ml-2 hover:scale-200 mr-2" />  
        Sign out of Vision.io
      </div>
    </div>
  );
}

export default AccountMenu;

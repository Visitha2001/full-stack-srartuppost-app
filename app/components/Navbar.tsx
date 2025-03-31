import { auth , signIn , signOut} from '@/auth';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = async () => {
  const session = await auth()

  return (
    <header className='px-5 py-2 bg-white shadow-sm font-work-sans border-b-2 border-pink-700'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <Image src='/YCDirectory.png' alt='logo' width={144} height={30}/>
        </Link>

        <div className='flex items-center gap-5 text-black'>
          {session && session?.user ? (
            <>
              <Link href="/startup/create">
                <span> Crate</span>
              </Link>
              <Link href="/user/${session?.id}">
                 <span className='font-semibold'>{session?.user?.name}</span>
              </Link>
              <form action={async() => {
                'use server'
                await signOut({redirectTo : "/"})
              }}>
                <button type='submit' className='border-2 border-red-500 text-red-500 px-4 py-1 rounded-xl cursor-pointer hover:bg-red-400 hover:text-white font-semibold'>Log-Out</button>
              </form>
            </>
          ) : (
            <form action={async() => {
              'use server'
              await signIn ('github')
            }}>
              <button type='submit' className='border-2 border-gray-700 px-4 py-1 rounded-xl cursor-pointer hover:bg-gray-300 font-semibold'>Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

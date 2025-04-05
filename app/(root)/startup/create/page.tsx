import { auth, signIn } from '@/auth';
import StartupForm from '@/components/StartupForm';
import React from 'react';

const Page = async () => {
    const session = await auth();
    if (!session) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="bg-blue-100 border border-blue-400 shadow-2xl rounded-xl px-8 pt-6 pb-8 mb-4 w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Please Sign In</h2>
                    <p className="text-gray-700 mb-4">You need to sign in to submit your startup pitch.</p>
                    <form action={async() => {
                        'use server'
                        await signIn ('github')
                    }}>
                        <button type='submit' className='border-2 bg-blue-600 text-white px-5 py-2 rounded-sm cursor-pointer hover:bg-blue-500 font-semibold'>Login</button>
                    </form>
                </div>
            </div>
        );
    }

  return (
    <div>
      <section className="w-full bg-pink-600 min-h-[230px] flex justify-center items-center flex-col py-8 px-6">
        <p className='heading mt-4'>Submit Your Startup Pitch</p>
        <p
          className="font-medium text-[14px] text-white text-center break-words max-w-3xl"
        >
            Share your startup idea with the world and get feedback from our community. Fill out the form below to submit your pitch.
        </p>
      </section>

      <StartupForm />
    </div>
  );
}

export default Page;
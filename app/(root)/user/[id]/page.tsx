import { auth } from '@/auth';
import UserStartUps from '@/components/UserStartUps';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';

const page = async ({params} : {params : Promise<{id : string}>}) => {
    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID_QUERY, {id});
    if (!user) {
        notFound()
    }
  return (
    <div>
      <section className="profile_container w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10">
        <div className='profile_card w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-pink-600 border-[5px] border-black shadow-100 rounded-[30px] relative z-0 h-fit max-lg:w-full'>
            <div className="profile_title w-11/12 bg-white border-[5px] border-black rounded-[20px] px-5 py-3 absolute -top-9 after:absolute after:content-[''] after:-top-1 after:right-0 after:-skew-y-6 after:bg-black after:-z-[1] after:rounded-[20px] after:w-full after:h-[60px] before:absolute before:content-[''] before:-bottom-1 before:left-0  before:-skew-y-6 before:w-full before:h-[60px] before:bg-black  before:-z-[1] before:rounded-[20px] shadow-100">
                <h3 className='text-3xl text-black font-bold text-center line-clamp-1 sm:text-3xl lg:text-lg'>
                    {user.name}
                </h3>
            </div>
            <Image
                src={user.image}
                alt='user'
                height={220}
                width={220}
                className='profile_image rounded-full object-cover border-[3px] border-black'
            />
            <p className='text-white font-bold mt-2 text-lg'>@{user?.username}</p>
            <p className="text-white font-normal mt-2 text-md text-center">{user?.bio}</p>
        </div>

        <div>
            <div className="flex-1 flex flex-col gap-5 lg:-mt-5 px-2 mb-4">
                <p className="text-2xl font-bold">
                    {session?.id === id ? "Your" : "All"} Start-Ups :
                </p>
            </div>
            <ul className="card_grid-sm grid sm:grid-cols-2 gap-5">
                <UserStartUps id={id}/>
            </ul>
        </div>
      </section>
    </div>
  );
}

export default page;

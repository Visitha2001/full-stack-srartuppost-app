import React from 'react';
import Ping from '@/components/ping';
import { client } from '@/sanity/lib/client';
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/queries';
import { EyeIcon } from 'lucide-react';
import { writeClient } from '@/sanity/lib/write-client';
import { after } from 'next/server';

interface ViewsResponse {
  views: number;
}

const View = async ({id} : {id : string}) => {
  const {views: totalViews} = await client
    .withConfig({useCdn: false})
    .fetch<ViewsResponse>(STARTUP_VIEWS_QUERY, {id});

  after(async() => await writeClient
    .patch(id)
    .set({views : totalViews + 1})
    .commit())

  return (
    <div className="view-container flex justify-end items-center mt-5 fixed bottom-3 right-3">
      <div className="absolute -top-2 -right-1">
        <Ping />
      </div>

      <p className="view-text font-medium text-[16px] bg-pink-100 px-4 py-2 border border-pink-200 rounded-lg capitalize">
        <span className='flex justify-between gap-1 font-black items-center'><EyeIcon className="size-5"/>{totalViews}</span>
      </p>
    </div>
  );
}

export default View;
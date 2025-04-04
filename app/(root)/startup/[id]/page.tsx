import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react'
import markdownit from 'markdown-it';
import { Skeleton } from '@/components/ui/skeleton';
import View from '@/components/view';

export const experimental_ppr = true;

const md = markdownit();

const page = async ({params} : {params : Promise<{ id : string }>}) => {
    const id = ( await params ).id

    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id})
    if (!post) {
        return notFound();
    }

    const parsedContent = md.render(post?.pitch || '');

  return (
    <div>
      <section className="w-full bg-pink-600 min-h-[230px] flex justify-center items-center flex-col py-8 px-6">
        <p
          className="tag bg-yellow-300 px-6 py-3 font-work-sans font-bold rounded-sm uppercase relative before:content-[''] before:absolute before:top-2 before:left-2 before:border-t-[10px] before:border-t-gray-900 before:border-r-[10px] before:border-r-transparent after:content-[''] after:absolute after:bottom-2 after:right-2 after:border-b-[10px] after:border-b-gray-900 after:border-l-[10px] after:border-l-transparent"
        >
          {formatDate(new Date(post?._createdAt))}
        </p>
        <p className='heading mt-4'>{post.title}</p>
        <p
          className="font-medium text-[14px] text-white text-center break-words max-w-3xl"
        >{post.description}</p>
      </section>

      <section className="section_container px-6 py-10 max-w-7xl mx-auto">
        <img
          src={post.image || 'null'}
          alt="thumbnail"
          className="w-full h-[450px] object-cover rounded-lg border border-pink-500"
        />
        <div className="space-y-5 mt-5 max-w-7xl mx-auto">
          <div className="flex justify-between gap-5 items-center">
            <Link href={`/user/${post.author?._id}`} className="flex items-center gap-3">
              {post.author?.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name || "Author image"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              {post.author?.name && (
                <div className="flex flex-col">
                  <span className="font-semibold">{post.author.name}</span>
                  <span className="font-normal text-[12px] text-gray-600">@{post.author?.username}</span>
                </div>
              )}
            </Link>

            <Link
              href={`/?query=${post.category?.toLowerCase()}`}
              className="text-sm text-gray-900 rounded-2xl px-5 py-2 font-medium bg-blue-300"
            >
              {post.category}
            </Link>
          </div>
          <h1 className="font-semibold text-3xl mt-4 font-work-sans">Startup Details :</h1>
          {parsedContent ? (
            <article
              className="prose prose-slate max-w-none font-work-sans mt-4 break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="text-gray-600 text-sm mt-4">No content available</p>
          )}

          <hr className="divider border-dotted bg-zinc-400 max-w-4xl my-10 mx-auto"/>

          <Suspense fallback={<Skeleton
              className="bg-zinc-400 h-10 w-24 rounded-lg fixed bottom-3 right-3"
            />}>
              <View id={post._id} />
          </Suspense>
        </div>
      </section>
    </div>
  )
}

export default page
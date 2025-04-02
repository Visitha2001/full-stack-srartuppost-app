// In page.tsx
import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {
  searchParams: { query?: string }
}) {
  const query = searchParams.query;

  let posts: StartupTypeCard[] = [];
  try {
    posts = await client.fetch<StartupTypeCard[]>(STARTUP_QUERY);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  const filteredPosts = query 
    ? posts.filter(post => 
        post.title?.toLowerCase().includes(query.toLowerCase()) ||
        post.description?.toLowerCase().includes(query.toLowerCase()) ||
        post.category?.toLowerCase().includes(query.toLowerCase())
      )
    : posts;

  return (
    <>
      <section className="w-full bg-pink-600 min-h-[530px] flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">PITCH YOUR STARTUP, <br /> connect with Entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white text-center break-words max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container px-6 py-10 max-w-7xl mx-auto text-3xl font-bold">
        {query ? `Search results for "${query}" :` : 'All Start-Ups :'}

        <ul className="mt-7 card_grid grid md:grid-cols-3 sm:grid-cols-2 gap-5">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-center text-xl">No results found.</p>
          )}
        </ul>
      </section>
    </>
  );
}
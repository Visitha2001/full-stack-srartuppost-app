import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: {
  searchParams: { query?: string }
}) {
  const query = (await searchParams).query || '';
  const params = { search : query || null };
  const { data: posts } = await sanityFetch({
    query: STARTUP_QUERY,
    params
  });

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
          {posts.length > 0 ? (
            posts.map((post) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="text-center text-xl">No results found.</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
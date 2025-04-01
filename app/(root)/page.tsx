import Image from "next/image";
import SearchForm from "../components/SearchForm";
import StartupCard from "../components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _cratedAt: new Date(),
      views: 55,
      author: {_id: 1 , name: 'Visitha Nirmal' },
      _id: 1,
      description: "A revolutionary idea for a digital platform that has connects small businesses with the best talent",
      image: "https://picsum.photos/300/175",
      category: "Digital",
      title: "Digital Media Platforms",
    }
  ]

  return (
    <>
      <section className="w-[99%] bg-pink-600 min-h-[530px] flex justify-center items-center flex-col py-10 px-6 m-2 mx-auto border-5 border-pink-700">
        <h1 className="heading">PITCH YOUR STARTUP, <br /> connect with Entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white text-center break-words max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm query={query}/>
      </section>

      <section className="section_container px-6 py-10 max-w-7xl mx-auto text-3xl font-bold">
        {query ? `Search results for ${query} :` : 'All Start-Ups :'}

        <ul className="mt-7 card_grid grid md:grid-cols-3 sm:grid-cols-2 gap-5">
        {posts && posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
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
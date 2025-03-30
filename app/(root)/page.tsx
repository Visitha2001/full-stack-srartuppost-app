import Image from "next/image";
import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="w-[99%] bg-pink-600 min-h-[530px] flex justify-center items-center flex-col py-10 px-6 m-2 mx-auto border-5 border-pink-700">
        <h1 className="heading">PITCH YOUR STARTUP, <br /> connect with Entrepreneurs</h1>
        <p className="font-medium text-[20px] text-white text-center break-words max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.</p>
        <SearchForm />
      </section>
    </>
  );
}

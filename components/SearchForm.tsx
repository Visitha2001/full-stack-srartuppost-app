import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';

const SearchForm = ({query} : {query? : string}) => {
  return (
    <Form action="/"
        scroll={false}
        className='search-form max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5'
    >
        <input type="text"
            name='query'
            defaultValue=''
            className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none'
            placeholder='Search for startups...'
        />
        <div className='flex gap-2'>
            {query && (
                <SearchFormReset />
            )}
            <button type='submit' className='flex gap-2 text-[16px] font-bold text-white bg-black hover:bg-gray-800 border-[1px] border-black rounded-[80px] px-4 py-2'>
                <Search className="size-5"/>Search
            </button>
        </div>
    </Form>
  )
}

export default SearchForm
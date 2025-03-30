import React from 'react'
import Form from 'next/form'

const SearchForm = () => {
  return (
    <Form action="/"
        scroll={false}
        className='max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5'
    >
        <input type="text"
            name='query'
            defaultValue=''
            className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full h-auto outline-none'
            placeholder='Search for startups...'
        />
        <div className='gap-2 size-[50px] rounded-full bg-black flex justify-center items-center !important'>
            
        </div>
    </Form>
  )
}

export default SearchForm
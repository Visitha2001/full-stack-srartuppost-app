'use client'
import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;
        if (form) {
            form.reset();
        }
    }

  return (
    <div>
        <button type='reset' onClick={reset} className=''>
            <Link href='/' className="search-btn rounded-full px-3 py-3 bg-black flex justify-center items-center !important text-white">
                <X className='size-4'/>
            </Link>
        </button>
    </div>
  );
}

export default SearchFormReset;

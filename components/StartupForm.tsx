'use client'
import React , {useState} from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { SendIcon } from 'lucide-react';

const StartupForm = () => {
    const [errors , setErrors] = useState<Record<string , string>>({});
    const [pitch, setPitch] = useState("");

    return (
    <form
        action={() => {}}
        className="bg-white border w-[90%] border-gray-900 shadow-2xl rounded px-8 pt-6 pb-8 mb-10 max-w-5xl mx-auto mt-8"
    >
        <div>
            <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Startup Title :
            </label>
            <Input
                id="title"
                type="text"
                name="title"
                placeholder="Enter Title"
                className="appearance-none border border-gray-900 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
        </div>
        <div className="mt-4">
            <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description :
            </label>
            <Textarea
                id="description"
                name="description"
                placeholder="Enter Description"
                className="appearance-none border border-gray-900 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
            />
            {errors.description && <p className="text-red-500">{errors.description}</p>}
        </div>
        <div className="mt-4">
            <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category :
            </label>
            <Input
                id="category"
                type="text"
                name="category"
                placeholder="Enter Category (Technology, Health, etc.)"
                className="appearance-none border border-gray-900 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
            />
            {errors.category && <p className="text-red-500">{errors.category}</p>}
        </div>
        <div className="mt-4">
            <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image URL :
            </label>
            <Input
                id="link"
                type="url"
                name="link"
                placeholder="Enter Image URL"
                className="appearance-none border border-gray-900 rounded-md w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                required
            />
            {errors.link && <p className="text-red-500">{errors.link}</p>}
        </div>
        <div className="mt-4" data-color-mode="light">
            <label className="block uppercase text-gray-700 text-sm font-bold mb-2" htmlFor="pitch">
                Pitch :
            </label>
            <MDEditor
                value={pitch}
                onChange={
                    (value) => setPitch(value as string)
                }
                height={300}
                preview="edit"
                style={{border: '1px solid #8A8A8AFF', borderRadius: '10px' , padding: '10px', }}
                textareaProps={{
                    placeholder: 'Enter your idea and what problems you resolve with your startup in here...',
                }}
            />
            {errors.pitch && <p className="text-red-500">{errors.pitch}</p>}
        </div>
        <div className="flex items-center justify-between mt-4">
            <button
                type="submit"
                className="w-full items-center bg-pink-600 text-white px-5 py-3 rounded-lg cursor-pointer hover:bg-pink-800 font-semibold transition-colors"
            >
                Submit Your Start-Up <SendIcon className="inline ml-2 mb-1" size={16} />
            </button>
        </div>
    </form>
  )
}

export default StartupForm

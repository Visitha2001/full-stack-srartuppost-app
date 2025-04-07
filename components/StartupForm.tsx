'use client'
import React , {useActionState, useState} from 'react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import MDEditor from '@uiw/react-md-editor';
import { Send , AlertCircle } from 'lucide-react';
import { formSchema } from '@/lib/validations';
import { z } from "zod";
import { useRouter } from 'next/navigation';
import { createPitch } from '@/lib/actions';


const StartupForm = () => {
    const [errors , setErrors] = useState<Record<string , string>>({});
    const [pitch, setPitch] = useState("");
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleFormSubmit = async (prevState: any, formData: FormData) => {
        setIsSubmitting(true);
        try {
            const formValues = {
                title: formData.get('title') as string,
                description: formData.get('description') as string,
                category: formData.get('category') as string,
                link: formData.get('link') as string,
                pitch,
            };

            setErrors({});

            await formSchema.parseAsync(formValues);

            const result = await createPitch(prevState, formData, pitch);

            if(result.state == "SUCCESS" && result._id){
                alert('Startup Successfully created')
                router.push(`/startup/${result._id}`);
            }
            return result;
        } catch (error) {
            if(error instanceof z.ZodError) {
                const fieldErrors = error.flatten().fieldErrors;
                setErrors(fieldErrors as unknown as Record<string, string>)
                return { ...prevState, errors: "Validation Failed", status: "Error" };
            }
            return { ...prevState, errors: "An unexpected error occurred", status: "Error" };
        } finally {
            setIsSubmitting(false);
        }
    };

    const [state , formAction, isPending] = useActionState(
        handleFormSubmit,
        {
            error : "",
            status: "INITIAL"
        }
    );

    return (
    <form
        action={formAction}
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
            {errors.title && <p className="flex  gap-2 items-center text-red-400 font-semibold mt-1">
                <AlertCircle size={15} />
                {errors.title}</p>}
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
            {errors.description && <p className="flex  gap-2 items-center text-red-400 font-semibold mt-1">
                <AlertCircle size={15} />
                {errors.description}</p>}
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
            {errors.category && <p className="flex  gap-2 items-center text-red-400 font-semibold mt-1">
                <AlertCircle size={15} />
                {errors.category}</p>}
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
            {errors.link && <p className="flex  gap-2 items-center text-red-400 font-semibold mt-1">
                <AlertCircle size={15} />
                {errors.link}</p>}
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
            {errors.pitch && <p className="flex  gap-2 items-center text-red-400 font-semibold mt-1">
                <AlertCircle size={15} />
                {errors.pitch}</p>}
        </div>
        <button
            type="submit"
            className="w-full items-center bg-pink-600 text-white mt-4 px-5 py-3 rounded-lg cursor-pointer hover:bg-pink-800 font-semibold transition-colors"
            disabled={isSubmitting}
        >
            {isSubmitting ? "Submitting..." : "Submit Your Pitch"}
            <Send className="inline ml-2 mb-1" size={16} />
        </button>
    </form>
  )
}

export default StartupForm

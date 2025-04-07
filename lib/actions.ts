'use server'

import { auth } from "@/auth"
import { parseServerActionResponse } from "./utils"
import slugify from 'slugify'
import { writeClient } from "@/sanity/lib/write-client"

export const createPitch = async (
    state: any,
    form: FormData,
    pitch: string
) => {
    const session = await auth()

    if (!session) {
        return parseServerActionResponse({
            error : 'not authenticated',
            state : 'ERROR'
        })
    }

    const {title, description, category, link} = Object.fromEntries(
        Array.from(form).filter(([key]) => key !== 'pitch')
    )

    const slug = slugify(title as string, {lower : true, strict : true});

    try {
        const startup = {
            title,
            slug : {
                _type : 'slug',
                current : slug
            },
            description,
            category,
            author : {
                _ref : session?.id,
                _type :'reference'
            },
            views: 0,
            image: link,
            pitch
        }

        const result = await writeClient.create({
            _type :'startup',
            ...startup
        })

        return parseServerActionResponse({
            ...result,
            _id : result._id,
            error : '',
            state : 'SUCCESS'
        })
    }
    catch (err) {
        console.error(err);
        return parseServerActionResponse({
            error : JSON.stringify(err),
            state : 'ERROR'
        })
    }
}
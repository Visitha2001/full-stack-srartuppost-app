import { formatDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StartupCard = ({post} : {post : StartupTypeCard}) => {
    const { _cratedAt , views , author : { _id : authorId , name} , title , description , category , _id , image } = post;

  return (
    <div>
        <li className="startup-card group bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary transition-all duration-500 hover:shadow-gray-500 hover:bg-gradient-to-b hover:from-pink-100 hover:to-pink-300">
            <div className="flex items-center justify-between">
                <p className="startup-card_date text-[14px] font-medium bg-primary-100 rounded-full group-hover:bg-white-100">
                    {formatDate(_cratedAt)}
                </p>
                <div className="flex gap-1.5 items-center">
                    <EyeIcon className="size-5 text-primary" />
                    <p className="font-medium text-[14px] text-black">{views}</p>
                </div>
            </div>

            <div className="flex justify-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-sm text-gray-500 font-medium line-clamp-1">{name}</p>
                    </Link>

                    <div className="flex items-center gap-1.5 justify-between">
                        <Link href={`/startups/${_id}`}>
                            <p className="text-2xl font-medium">{title}</p>
                        </Link>
                        <Link href={`/user/${authorId}`} className='items-center'>
                            <Image
                                src="https://picsum.photos/50/50"
                                width={50}
                                height={50}
                                alt="Placeholder"
                                className="rounded-full"
                            />
                        </Link>
                    </div>

                    <Link href={`/startups/${_id}`}>
                        <p className="startup-card_desc text-[16px] py-3 font-thin">
                            {description}
                        </p>
                        <Image
                            src={image}
                            alt="image"
                            width={600}
                            height={1750}
                            className="rounded-sm"
                        />
                    </Link>

                    <div className="flex justify-between gap-1 w-auto pt-2">
                        <Link href={`/?query=${category}`}>
                            <p>
                                <span className="text-sm text-gray-500 font-medium">{category}</span>
                            </p>
                        </Link>
                        <button>
                            <Link href={`/startups/${_id}`}>
                                <span className="rounded-full bg-gray-900 font-medium text-[12px] text-white px-4 py-3">View Startup</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </div>
  );
}

export default StartupCard;

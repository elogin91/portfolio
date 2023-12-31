import React from 'react'
import Image from "next/image";
import { Github } from '../icons';

export type ProjectCardType = {
    name: string;
    technologies: string;
    description: string;
    link: string;
    image: string;
}

type ProjectCardProps = {
    key: string;
    data: ProjectCardType;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {

    return (
        <div className='rounded-lg shadow-lg bg-puce w-full sm:w-1/3-g sm:max-w-xs'>
            <Image
                aria-label={`Image of ${data.name}`}
                src={data.image}
                alt={data.name}
                className=' rounded-lg object-cover w-full '
                priority={false}
                width={320}
                height={320}
            />
            <div className='p-4'>
                <h3 className='text-lg font-medium'>
                    {data.name}
                </h3>
                <h4 className='text-sm mt-2 min-h-50'>
                Technologies: {data.technologies}
                </h4>
                <p className='text-sm mt-2 min-h-50'>
                   {data.description}
                </p>
                <div className='flex flex-row mt-4 justify-between hover:bg-pink rounded-lg'>
                    <a href={data.link} className='flex items-center '>
                        <Github className='icons_contactme' />
                        <span className='text-night text-sm'> Repository of {data.name}</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
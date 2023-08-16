import React from 'react'
import Link from 'next/link'
import { contactMeText } from '../data/data'
import { Form } from '../components/form'

export default function ContactMe() {

    return (
        <div className='flex flex-col w-11/12 content-center m-auto mt-10'>
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <div className='flex flex-row w-9/12 content-center m-auto bg-rose p-10 gap'>
                <div className='flex flex-col w-2/4'>
                    <h3 className='text-2xl bt-10'>{contactMeText.title}</h3>
                    <p>{contactMeText.body}</p>
                </div>
                <div className='w-2/4'>
                    <Form/>
                </div>

            </div>
        </div>
    )
}

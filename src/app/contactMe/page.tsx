import React from 'react'
import Link from 'next/link'
import { contactMeText } from '../data/data'
import { Form } from '../components/form'

export default function ContactMe() {

    return (
        <div className='flex flex-col w-11/12 content-center m-auto mt-10'>
            <h2 className="text-2xl font-bold">Contáctame</h2>
            <div className='flex flex-col sm:flex-row w-full sm:w-10/12 content-center m-auto bg-rose p-5 sm:p-20 gap-20 text-white'>
                <div className='flex flex-col sm:w-2/4'>
                    <h3 className='text-2xl bt-10 font-bold'>{contactMeText.title}</h3>
                    <p>{contactMeText.body}</p>
                </div>
                <div className='sm:w-2/4 w-full'>
                    <Form/>
                </div>

            </div>
        </div>
    )
}

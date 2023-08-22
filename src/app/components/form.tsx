"use client";
import React, { useState, useRef, useEffect } from "react";

export const Form = () => {
    const [isMessageSent, setMessageSent] = useState<boolean>(false);
    const formRef = useRef<HTMLFormElement | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();

        const target = e.currentTarget;

        const name = target.elements.namedItem("name") as HTMLInputElement;
        const company = target.elements.namedItem('company') as HTMLInputElement;
        const email = target.elements.namedItem('email') as HTMLInputElement;
        const message = target.elements.namedItem('message') as HTMLInputElement;

        const data = {
            name: name.value,
            company: company.value,
            email: email.value,
            message: message.value,
        }

        try {
            const response = await fetch('/api/contact', {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (!response.ok) {
                throw new Error('HTTP ERROR! status: ' + response.status)
            }
            setMessageSent(true);
        }
        catch (error: any) {
            console.log("There was a problem with the fetch operation" + error.mesagge);
        }
    }

    useEffect(() => {
        let timeout: NodeJS.Timeout;
        if(isMessageSent && formRef) {
            formRef.current?.reset();
            setTimeout(()=> {
                setMessageSent(false);
            }, 9000)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [isMessageSent])

    return (
        <form onSubmit={handleSubmit} className="bg-blue p-10" ref={formRef}>
            <div className="mb-4 ">
                <label className="label-form" htmlFor='name'>
                    Name
                </label>
                <input id='name' name='name' type="text" className="input-form" required minLength={3} maxLength={100} />
            </div>

            <div className="mb-4 ">
                <label className="label-form" htmlFor='company'>
                    Company
                </label>
                <input id='company' name='company' type="text" className="input-form" required minLength={3} maxLength={100} />
            </div>

            <div className="mb-4 ">
                <label className="label-form" htmlFor='email'>
                    Email
                </label>
                <input id='email' name='email' type="email" className="input-form" required minLength={5} maxLength={200} />
            </div>
            <div className="mb-4 ">
                <label className="label-form" htmlFor='message'>
                    Message
                </label>
                <textarea id='message' name='mesagge' className="input-form" required minLength={25} maxLength={520} />
            </div>
            <button type="submit" className="button-form">Send Message</button>
            {isMessageSent && <p> Message has been sent.</p>}
        </form>
    )
}
"use client";
import React from "react";

export const Form = () => {

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
        }
        catch (error: any) {
            console.log("There was a problem with the fetch operation" + error.mesagge);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-blue p-10">
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
        </form>
    )
}
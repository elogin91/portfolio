import React from "react";

export const Form = () => {
    return(
        <form className="bg-blue p-10">
            <div className="mb-4 ">
                <label className="label-form" htmlFor='name'>
                    Name 
                </label>
                <input id='name' name='name' type="text" className="input-form"/>
            </div>

            <div className="mb-4 ">
                <label className="label-form" htmlFor='company'>
                    Company 
                </label>
                <input id='company' name='company' type="text" className="input-form"/>
            </div>

            <div className="mb-4 ">
                <label className="label-form" htmlFor='email'>
                    Email
                </label>
                <input id='email' name='email' type="email" className="input-form"/>
            </div>
            <div className="mb-4 ">
                <label className="label-form" htmlFor='message'>
                    Message
                </label>
                <textarea id='message' name='mesagge' className="input-form"/>
            </div>
            <button type="submit"className="button-form">Send Message</button>
        </form>
    )
}
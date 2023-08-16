import React from "react";

export const Form = () => {
    return(
        <form>
            <div className="mb-4 ">
                <label className="font-bold mb-2 text-night" htmlFor='name'>
                    Name 
                </label>
                <input id='name' name='name' type="text" className="border border-puce p-2 w-full"/>
            </div>
        </form>
    )
}
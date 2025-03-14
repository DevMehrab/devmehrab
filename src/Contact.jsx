import React from 'react'

export const Contact = () => {
    return (
        <div className='bg-zinc-900 w-screen '>
            <div className='flex flex-col justify-start py-6 w-screen p-4 max-w-4xl text-xl text-zinc-200 mx-auto my-auto'>
                <h1 className="my-6 text-4xl">Contact</h1>

                <div className='flex flex-col '>
                    <input className='border border-zinc-800 rounded p-2 outline-0 my-4'  type="text" placeholder='Name' />
                    <input className='border border-zinc-800 rounded p-2 outline-0 my-4' type="mail" placeholder='Mail' />
                    <textarea className='border border-zinc-800 rounded p-2 outline-0 my-4' name="" id="" placeholder='Messege'></textarea>
                    <button className='p-2 border-zinc-800 border my-6 rounded hover:bg-zinc-300 hover:text-zinc-800'>Submit</button>
                </div>

            </div>
        </div>
    )
}

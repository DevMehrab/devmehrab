import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className='bg-zinc-800 w-screen '>
            <div className='flex flex-col justify-start py-6 w-screen p-4 max-w-4xl text-xl text-zinc-200 mx-auto my-auto'>
                <p className="text-base text-center">&copy; {new Date().getFullYear()} Mehrab Hossain. </p>

                <div className="flex my-4 justify-center">
                    <a href="https://github.com/DevMehrab" className="text-2xl mr-4 text-zinc-600"><FaGithub /></a>
                    <a href="https://bd.linkedin.com/in/dev-mehrab" className="text-2xl mr-4 text-zinc-600"><FaLinkedin /></a>
                    <a href="https://www.facebook.com/dev.mehrabhossain" className="text-2xl mr-4 text-zinc-600"><FaFacebook /></a>
                </div>
            </div>
        </div>
    )
}

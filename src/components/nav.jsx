import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { SiPreact } from "react-icons/si";
import { useState } from "react";
import './maintenance.css';

const nav = () => {
    const [toggle, setToggle] = useState(false);
    function openMenu(){
        setToggle(true);
    }
    function closeMenu(){
        setToggle(false);
    }
    return(
        <>
       <div className="bg-gray-800">
    <div className="justify-items-center p-3 lg:flex-row overflow-hidden relative">
        <h1 className="text-white font-semibold text-xs md:text-base lg:text-base absolute top-0 left-0 whitespace-nowrap animate-moveText">The website is still under construction. Thank you!</h1>
    </div>
</div>

        <div className="flex items-center justify-between p-5 lg:flex-row">
            <div>
                <a href="#" className="text-gray-600 font-mono text-2xl tracking-wider flex items-center"> <SiPreact/><p>&nbsp;I'm a Developer<span class="blink">|</span></p></a>
            </div>
            <div className="space-x-4">
                <div className="ssm:hidden lg:block space-x-2">
                    <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-5 py-2 text-xl">Skills</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-5 py-2 text-xl">Project</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-5 py-2 text-xl">Contact</a>
                </div>
                <div className="ssm:block lg:hidden">
                    {toggle ? (
                        <AiOutlineClose onClick={closeMenu} size={30} className="text-gray-600 cursor-pointer"/>
                    ):(<HiMenuAlt1 onClick={openMenu} size={30} className="text-gray-600 cursor-pointer"/>)}
                </div>
            </div>
        </div>
        <div className="ssm:block lg:hidden">
            {toggle ? (
                <div className="flex justify-between ml-10">
                <ul>
                    <li className="text-gray-600 hover:bg-gray-600 hover:text-white text-xl mb-2 cursor-pointer px-5 py-2 rounded-full">Skills</li>
                    <li className="text-gray-600 hover:bg-gray-600 hover:text-white text-xl mb-2 cursor-pointer px-5 py-2 rounded-full">Project</li>
                    <li className="text-gray-600 hover:bg-gray-600 hover:text-white text-xl mb-2 cursor-pointer px-5 py-2 rounded-full">Contact</li>
                </ul>
                </div>
            ):(
                <div></div>
            )}
           
        </div>
        </>
    )
}

export default nav
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt1 } from "react-icons/hi";
import { SiPreact } from "react-icons/si";
import { useState } from "react";

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
        <div className="flex items-center justify-between p-5 lg:flex-row">
            <div>
                <a href="#" className="text-gray-600 font-mono text-2xl tracking-wider flex items-center"> <SiPreact/>React</a>
            </div>
            <div className="space-x-4">
                <div className="ssm:hidden lg:block space-x-2">
                    <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-5 py-2 text-xl">Skills</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-5 py-2 text-xl">Project</a>
                    <a href="#" className="text-gray-600 hover:bg-gray-600 hover:text-white rounded-full px-5 py-2 text-xl">About me</a>
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
                    <li className="text-gray-600 hover:bg-gray-600 hover:text-white text-xl mb-2 cursor-pointer px-5 py-2 rounded-full">About me</li>
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
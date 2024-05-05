import { BsFacebook, BsTwitter, BsInstagram, BsPinterest } from "react-icons/bs";
import HeroPic from "../assets/alvin2.jpg";
const hero = () => {
    return(
        <section className="flex justify-around item-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-gray-600">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-gray-600">Hey there, I am</p>
                <h1 className="text-6xl">Alvin Salvacion</h1>
                <hr />
                <p className="mt-10 text-gray-600 font-sans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer bibendum elit posuere libero sollicitudin, eu aliquet felis consequat. Donec nec tortor nulla. Ut tincidunt ligula et magna sagittis ullamcorper. Quisque iaculis gravida rhoncus. Mauris imperdiet vitae eros a efficitur. 
                </p>
            </div>
            <div className="w-1/3 item-center ssm:w-fit">
                <img src={HeroPic} alt="" width={250} height={250} className="rounded-full border-8 border-white w-full" />
            </div>
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About me</p>
                <p className="text-gray-600">
                Donec nec tortor nulla. Ut tincidunt ligula et magna sagittis ullamcorper.
                </p>
                <button className="bg-white text-gray-600 px-10 py-2 my-3 rounded-full hover:bg-gray-600 hover:text-white">
                    Show More...
                </button>
                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <BsFacebook size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/>
                    <BsTwitter size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/>
                    <BsInstagram size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/>
                    <BsPinterest size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/>
                </div>
            </div>
        </section>
    )
}

export default hero
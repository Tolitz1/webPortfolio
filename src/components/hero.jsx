import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import HeroPic from "../assets/alvin2.jpg";
const hero = () => {
    return(
        <section className="flex justify-around item-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-gray-600">
            <div className="lg:w-1/3 ssm:w-fit">
                <p className="text-4xl mb-5 text-gray-600">Hey there, I am</p>
                <h1 className="text-6xl">Alvin Salvacion</h1>
                <hr />
                <p className="mt-10 text-gray-600 font-sans">
                I am a passionate Computer Programmer with a Bachelor of Science in Information Technology from STI College Lucena, along with one year of hands-on experience in the field. In my previous work, I've had the opportunity to create web-based software, where I honed my skills in web development and software engineering.
                </p>
            </div>
            <div className="w-1/3 item-center ssm:w-fit">
                <img src={HeroPic} alt="" width={250} height={250} className="rounded-full border-8 border-white w-full" />
            </div>
            <div className="w-1/3 ssm:w-fit">
                <p className="text-4xl mb-4">About me</p>
                <p className="text-gray-600">
                I specialize in crafting innovative solutions through programming. Let's build something amazing together.
                </p>
                {/* <button className="bg-white text-gray-600 px-10 py-2 my-3 rounded-full hover:bg-gray-600 hover:text-white">
                    Show More...
                </button> */}
                <div className="flex mt-5 space-x-4 cursor-pointer">
                    <a href="https://www.facebook.com/alvin.salvacion.75" target="_blank"><BsFacebook size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/></a>
                    <a href="https://www.instagram.com/alvinslvcn/" target="_blank"><BsInstagram size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/></a>
                    <a href="https://github.com/Tolitz1" target="_blank"><FaGithub size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/></a>
                    <a href="https://www.linkedin.com/in/alvin-salvacion-2a2386211/?trk=opento_sprofile_details" target="_blank"><FaLinkedin size={40} className="border-4 hover:bg-gray-600 hover:text-white rounded-full"/></a>
                </div>
            </div>
        </section>
    )
}

export default hero
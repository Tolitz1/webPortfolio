
import Applogo from "../assets/appsystemlogo.png";
import Dtslogo from "../assets/dts.png";
import Supply from "../assets/supply.png";
import Borrowing from "../assets/borrowing.png";
import Dod from "../assets/dod.png";
export default function Project() {
  return (
        <div className="bg-gray-800 m-20 max-w-full">
            <div className="grid justify-items-center m-10">
                <h1 className="text-3xl text-gray-400 mt-10">Projects</h1>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm to-gray-500 font-bold">
                                    Appointment System
                                </div>
                                <a href="#" className="font-semibold">Southern Luzon State University</a>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam saepe mollitia, vel obcaecati quia iusto doloribus facilis modi, quam impedit voluptate illo tempore cupiditate tenetur expedita accusantium et! Pariatur?
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={Applogo} alt="Applogo" width={150} height={150} />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm to-gray-500 font-bold">
                                    Document Tracking System
                                </div>
                                <a href="#" className="font-semibold">Southern Luzon State University</a>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam saepe mollitia, vel obcaecati quia iusto doloribus facilis modi, quam impedit voluptate illo tempore cupiditate tenetur expedita accusantium et! Pariatur?
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={Dtslogo} alt="Applogo" width={150} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm to-gray-500 font-bold">
                                    Supply Inventory System
                                </div>
                                <a href="#" className="font-semibold">Southern Luzon State University</a>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam saepe mollitia, vel obcaecati quia iusto doloribus facilis modi, quam impedit voluptate illo tempore cupiditate tenetur expedita accusantium et! Pariatur?
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={Supply} alt="Applogo" width={150} height={150} />
                            </div>
                        </div>
                    </div>
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm to-gray-500 font-bold">
                                   MIS Borrowing System
                                </div>
                                <a href="#" className="font-semibold">Southern Luzon State University</a>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam saepe mollitia, vel obcaecati quia iusto doloribus facilis modi, quam impedit voluptate illo tempore cupiditate tenetur expedita accusantium et! Pariatur?
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={Borrowing} alt="Applogo" width={150} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
                        <div className="md:flex">
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm to-gray-500 font-bold">
                                Digitization of Documents
                                </div>
                                <a href="#" className="font-semibold">Southern Luzon State University</a>
                                <p className="mt-2 text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam saepe mollitia, vel obcaecati quia iusto doloribus facilis modi, quam impedit voluptate illo tempore cupiditate tenetur expedita accusantium et! Pariatur?
                                </p>
                            </div>
                            <div className="md:shrink-0 p-5">
                                <img src={Dod} alt="Applogo" width={150} height={150} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

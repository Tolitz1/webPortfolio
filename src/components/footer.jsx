import { CiMail, CiLocationArrow1  } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  return (
<div className="flex flex-col bg-gray-800 text-white mt-5 py-5 px-5 justify-center items-center">
  <div className="flex flex-wrap justify-center items-center mb-4">
    <div className="mb-4 sm:mb-0 sm:mr-4 flex items-center">
      <span className="font-semibold mr-4 flex items-center"><CiLocationArrow1 className="mr-2" />Lucban, Quezon Philippines</span>
    </div>
    <div className="mb-4 sm:mb-0 sm:mr-4 flex items-center">
      <span className="mr-4 flex items-center"><FiPhone className="mr-2" />+63 915 160 6219</span>
    </div>
    <div className="mb-4 sm:mb-0 sm:mr-4 flex items-center">
      <span className="flex items-center"><CiMail className="mr-2" />alvinsalvacion06@gmail.com</span>
    </div>
  </div>
  <hr />
 <div className="flex items-center">
    <span className="flex items-center"><MdCopyright className="mr-2" />2024 All Rights Reserved</span>
  </div>
</div>
  )
}

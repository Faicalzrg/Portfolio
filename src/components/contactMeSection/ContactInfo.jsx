import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="Faical.zourgane@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+212 666 20 42 07" Image={FiPhone} />
      <SingleInfo text="Rabat, Morocco" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

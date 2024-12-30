import Image from "next/image"


export default function GreenHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#23856D]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
            <Image src="/Vector (35).png" alt="phone" width={10} height={10} />
            <span className="font-Montserrat font-semibold text-[14px] hover:underline"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <Image src="/Vector (33).png" alt="mail" width={16} height={16} />
            <span className="font-Montserrat text-[14px] hover:underline">michelle.rivera@example.com</span>
          </button>
        </div>

        {/* Center section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right section: Social Icons */}
        <div className="flex gap-[10px] items-center">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
             <Image src="/icn settings icn-xs (3).png" alt="Instagram" width={14} height={14} /> 
            <Image src="/Vector (8).png" alt="YouTube" width={18} height={14} />
            <Image src="/Vector (10).png" alt="Facebook" width={10} height={14} /> 
            <Image src="/ant-design_twitter-outlined.png"  alt="twitter"width={18} height={14}  />
          </div>
        </div>
      </div>
    </div>
  );
}
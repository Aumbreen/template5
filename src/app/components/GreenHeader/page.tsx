import Image from "next/image"



export default function GreenHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#23856D]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">
        {/* Left section: Contact Info */}
        <div className="flex gap-[10px]">
          <button className="flex items-center gap-[5px] p-[10px] text-white">
             <Image src="/Vector (45).png" alt="phone" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px] hover:underline"> (225) 555-0118</span>
          </button>
          <button className="flex items-center gap-[5px] p-[10px] text-white rounded-[5px]">
            <Image src="/Vector (46).png" alt="mail" width={16} height={16} />
            <span className="font-Montserrat text-[14px] hover:underlinen">michelle.rivera@example.com</span>
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
            <Image src="/icn settings icn-xs@2x.png" alt="Instagram" width={16} height={16} />
            <Image src="/Vector (48).png" alt="YouTube" width={16} height={16} />
            <Image src="/icn settings icn-xs (4).png" alt="Facebook" width={16} height={16} />
            <Image src="/Vector (49).png"alt="Twitter" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
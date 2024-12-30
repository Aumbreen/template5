import Image from "next/image";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
export default function Contact() {
  return (
    <div>
      <br />
      <Navbar2 />
      {/* HERO FOR CONTACT */}
      <div className="w-full h-auto bg-[#FFFFFF]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-[80px] mt-10 lg:mt-[104px] px-4 lg:px-0 max-w-[1050px] mx-auto">
          {/* Text Section */}
          <div className="flex flex-col gap-6 lg:gap-[35px] w-full lg:w-[599px]">
            <h5 className="text-[16px] font-bold text-[#252B42]">CONTACT US</h5>
            <h1 className="w-[378px] text-[58px] leading-[80px] font-bold text-[#252B42] tracking-[0.2px]">
              Get in touch today!
            </h1>
            <h4 className="w-[376px] text-[20px] leading-[30px] text-[#737373]">
              We know how large objects will act, but things on a small scale.
            </h4>
            <div>
              <h3 className="text-[24px] font-bold text-[#252B42]">Phone: +451 215 215</h3>
              <h3 className="text-[24px] font-bold text-[#252B42]">Fax: +451 215 215</h3>
            </div>
            <div className="flex gap-4">
              <Image src="/logos_twitter..png" alt="twitter" width={30} height={30} />
              <Image src="/logos_facebook.png" alt="facebook" width={30} height={30}  />
              <Image src="/ant-desigm_instagram-outlined..png" alt="instagram" width={30} height={30} />
              <Image src="/logos_linkedin 1).png" alt="linkedin" width={30} height={30} />
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[800px]">
            <Image src="/ContactFamily.jpg" alt="family" width={800} height={500} priority />
          </div>
        </div>
      </div>

      {/* OFFICE AND CONTACT */}
      <div className="w-full h-auto flex justify-center items-center bg-[#FFFFFF] py-8">
        <div className="w-full max-w-[1050px] h-auto flex flex-col gap-[80px] items-center">
          <div className="w-full max-w-[633px] h-auto flex flex-col gap-[10px] items-center text-center">
            <h6 className="text-[14px] font-Montserrat font-bold leading-[24px] tracking-[0.2px] text-[#252B42]">
              VISIT OUR OFFICE
            </h6>
            <h2 className="text-[40px] font-Montserrat font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
              We help small businesses with big ideas
            </h2>
          </div>
          </div>
          </div>



{/* Cards Section */}
<div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-8 px-4">




  {/* Card 1 */}
  <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image src="/icn settings .icn-xl..png"width={72} height={72} alt="phone" className="w-full h-full" />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>  
              </button>
            </div>

            {/* Card 2 */}
            <div className="max-w-[329px] w-full h-auto bg-[#252B42] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image
                  src="/icn settings .icn-xl (2).png"
                  alt="location"
                  width={72} height={72}
                  className="w-full h-full"
                />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                  georgia.young@example.com
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}

              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-white">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>

            {/* Card 3 */}
            <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
              {/* Icon */}
              <div className="w-[72px] h-[72px]"> 
                <Image src="/mail.png" width={72} height={72}alt="mail" className="w-full h-full" />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
 georgia.young@example.com  </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                Get Support
              </div>
             
{/* Button */}
<button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>
            </div>
            
            
          







            <div className="w-full h-auto bg-white flex justify-center items-center py-[80px]">
        <div className="w-full max-w-[1050px] flex flex-col items-center justify-center gap-[36px] px-4">



 
   {/* Arrow */}
   <div className="w-[72px] h-auto flex justify-center">
     <Image src="/Arrow 2.png" width={72}  height={72}alt="arrow" />
   </div>

   {/* Text and Button Section */}
   <div className="w-full max-w-[607px] h-auto flex flex-col items-center text-center gap-[16px]">
     {/* Heading */}
     <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
      {` WE CAN'T WAIT TO MEET YOU`}
     </h5>
     {/* Main Title */}
     <h1 className="font-Montserrat font-bold text-[40px] lg:text-[58px] leading-[48px] lg:leading-[80px] tracking-[0.2px] text-[#252B42]">
       {`Let’s Talk`}
     </h1>
     {/* Button */}
     <button className="rounded-[5px] py-[12px] px-[20px] lg:py-[15px] lg:px-[40px] bg-[#23A6F0] text-white font-Montserrat font-bold text-[14px] leading-[22px]">
       Try it free now
     </button>
    
   </div>
   </div>
  </div>
  <Footer />
  </div>
     
  )
}
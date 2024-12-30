import Image from "next/image";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GreenHeader from "../components/GreenHeader/page";


export default function Shop () {


  const products = [
    { id: 1, Image: "/pic1.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 2, Image: "/product-cover-5 (7).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 3, Image: "/product-cover-5 (8).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 4, Image: "/product-cover-5 (9).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 5, Image: "/product-cover-5 (10).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 6, Image: "/fixed-height (3).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 7, Image: "/product-cover-5 (11).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    { id: 8, Image: "/product-cover-5 (12).png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
    {id: 9, Image :"/shop7man.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] } ,
    {Id: 10, Image:"/shop8man.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] },
     {id: 11, Image :"/fixed-height.png", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] }, 
     {id: 12, Image :"/brown girl4.jpg", title: "Graphic Design", department: "English Department", oldPrice: "$16.48", newPrice: "$6.48", colors: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-black"] }, 
   
            
  ]
  return (
    <div>
      <GreenHeader />
      <br/>
      <Navbar />
      {/* Shop Section */}
      <div className="w-full h-[92px]  flex flex-col items-center mt-[10px]">
        <div className="w-full max-w-screen-xl flex gap-4 items-center py-[40px]">
          {/* Shop Title */}
          <div className="w-full h-[32px] flex justify-center items-center mb-[8px]">
            <h2 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Shop
            </h2>
          </div>
          {/* Breadcrumb */}
          <div className="w-full h-[44px] flex justify-center items-center gap-[5px]">
            <div className="flex items-center gap-[15px]">
              <div className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                Home
              </div>
               <Image src="/Vector (2).png" alt="arrow" width={8.26} height={6} />
              <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#BDBDBD] ">
                Shop
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* Category Section */}
      <div className="w-full bg-[#FAFAFA] py-8">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {/* Category 1 */}
    <div className="relative">
      <Image
        src="/cat1.jpg"
        width={204}
        height={223}
        alt="Category 1"
        className="w-full h-[223px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    {/* Category 2 */}
    <div className="relative">
      <Image
        src="/shop-hero-1-product-slide-1.jpg"
        width={204}
        height={223}
        alt="Shop Hero Product 1"
        className="w-full h-[223px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    {/* Category 3 */}
    <div className="relative">
      <Image
        src="/cat3.jpg"
        width={204}
        height={223}
        alt="Category 3"
        className="w-full h-[223px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    {/* Category 4 */}
    <div className="relative">
      <Image
        src="/cat4.jpg"
        width={204}
        height={223}
        alt="Category 4"
        className="w-full h-[223px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    {/* Category 5 */}
    <div className="relative">
      <Image
        src="/cat5.jpg"
        width={204}
        height={223}
        alt="Category 5"
        className="w-full h-[223px] object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  </div>



      {/* Popularity Section */}
      <div className="w-full h-[98px] flex justify-center items-center mt-12">
        <div className="w-full max-w-screen-xl flex justify-between items-center py-[24px] px-4">
          <div className="font-montserrat font-bold text-[14px] leading-[24px] text-[#737373]">
            Showing all 12 results
          </div >
          <div className="flex gap-4  justify-between items-center">
            <h3>Veiws</h3>
            <Image  src="/Vector (36).png" width={10} height={10} alt="text" className="hover:underline"/>
            <Image  src="/Vector (17).png" width={10} height={10} alt="text" className="hover:underline"/>
            
          </div>
          <div className="flex gap-2 items-center">
  {/* Popularity Button */}
  <button className="w-[141px] h-[50px] flex items-center justify-center border border-[#DDDDDD] relative">
    <p className="font-Montserrat text-[14px] leading-[28px] text-[#737373]">
      Popularity
    </p>
    <Image
      src="/Vector (18).png"
      width={16}
      height={16}
      alt="drop"
      className="absolute right-[10px] top-1/2 transform -translate-y-1/2"
    />
  </button>

  {/* Filter Button */}
  <button className="w-[94px] h-[50px] flex justify-center items-center bg-[#23A6F0] hover:bg-black">
    <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
      Filter
    </h6>
  </button>
</div>

      </div>
      </div>
      
      {/* Logo Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div className="flex justify-center">
                    <Image src="/Vector (23).png"  width={103} height={34}alt="Client 1 Logo" className="h-12 w-auto" />
                    </div>
                    <div className="flex justify-center">
                      <Image src="/Vector (24).png"  width={83} height={59}alt="Client 2 Logo" className="h-12 w-auto" />
                    </div>
                    <div className="flex justify-center">
                      <Image src="/Vector (25).png"  width={102} height={75}alt="Client 3 Logo" className="h-12 w-auto" />
                    </div>
                    <div className="flex justify-center">
                      <Image src="/Vector (26).png"  width={103} height={42}alt="Client 4 Logo" className="h-12 w-auto" />
                    </div>
                    <div className="flex justify-center">
                      <Image src="/Vector (27).png"width={104} height={62} alt="Client 5 Logo" className="h-12 w-auto" />
                    </div>
                    <div className="flex justify-center">
                      <Image src="/Vector (28).png"  width={76} height={72}alt="Client 6 Logo" className="h-12 w-auto" />
                    </div>
      </div>
</div>

<Footer />



{/* Product Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Product Image */}
            <Image
              className="w-full object-cover"
              src={product.Image}
              alt={product.title}
              width={300}
              height={400}
            />
            {/* Product Details */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.department}</p>
              <div className="text-gray-500 text-sm mb-4">
                <span className="line-through">{product.oldPrice}</span>
                <span className="text-green-500 font-bold ml-2">{product.newPrice}</span>
              </div>
              {/* Product Colors */}
              <div className="flex justify-center gap-2">
                {product.colors.map((color, index) => (
                  <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
        {/* Pagination */}
        <div className="w-full max-w-[313px] mx-auto mt-[100px] border border-gray-300 rounded-lg shadow-md">
          <div className="flex items-center justify-center space-x-2 w-[313px] h-[74px]">
            <div className="bg-gray-100 w-[85px] h-[74px] text-[#BDBDBD] font-extrabold px-6  py-4  rounded-r-md hover:underline border border-gray-300 shadow-md cursor-pointer">
              First
            </div>
            <div className="bg-white w-[48px] h-[74px] text-blue-400  px-6  py-4   rounded-r-md border border-gray-300 shadow-md cursor-pointer">
              1
            </div>
            <div className="bg-blue-400 w-[49px] h-[74px] text-white   px-6  py-4  rounded-md border border-gray-300 shadow-md  hover:cursor-pointer">
              2
            </div>
            <div className="bg-white  w-[49px] h-[74px] text-blue-400   px-6  py-4  rounded-md placeholder:border border-gray-300   shadow-md hover: cursor-pointer">
              3
            </div>
            <div className="bg-white  w-[85px] h-[74px] text-blue-400  px-6  py-4 border   rounded-lg border-gray-300  hover:bg-blue-400 shadow-md cursor-pointer">Next
              
            </div>
</div>
</div>
</div>

  )
}



    

              
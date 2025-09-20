import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-200 h-[80vh] w-full flex flex-col justify-center items-center">

      <div className="top-footer py-6 w-[80%] mx-auto  flex items-center justify-between ">
        <div className="w-[25%] ">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-400 rounded-lg p-2 mr-3">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">E-Comm</h2>
            </div>
            <p className="text-gray-600 text-sm leading-tight pr-8">
              Lorem Ipsum is simply dummy text of the <br /> printing and
              typesetting industry. Lorem <br /> Ipsum has been the industry's
              standard <br />
              dummy text ever.Since the 1500s, when <br /> an unknown printer.
            </p>
          </div>
        </div>
        <div className="w-[25%]">
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Follow us
            </h3>
            <p className="text-sm">
              Since the 1500s, when an unknown <br /> printer took a galley of
              type and <br />
              scrambled.
            </p>
          </div>
          <span className="text-blue-700 text-2xl">
            {" "}
            <i class="ri-facebook-fill"></i>
          </span>
          <span className="text-blue-500 text-2xl">
            {" "}
            <i class="ri-twitter-fill"></i>
          </span>
        </div>
        <div className="w-[25%]">
          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact us
            </h3>
            <p>
              E-Comm , 4578 <br /> Marmora Road,
              <br /> Glasgow D04 89GR
            </p>
          </div>
        </div>
      </div>


      <div className="bottom-footer p-6  w-[83%] mx-auto  flex items-center justify-between ">
        <div className="w-[35%] flex flex-col justify-center">
          
        <h2 className="text-2xl font-regular py-4 text-gray-800">Information</h2>
          <ul>
            <li className="text-lg">About us</li>
            <li className="text-lg">Information</li>
            <li className="text-lg">Privacy police</li>
            <li className="text-lg">Terms & Conditions</li>
          </ul>
        </div>
        <div className="w-[35%] flex flex-col justify-center">
          
        <h2 className="text-2xl font-regular py-4 text-gray-800">Service</h2>
          <ul>
            <li className="text-lg">About us</li>
            <li className="text-lg">Information</li>
            <li className="text-lg">Privacy police</li>
            <li className="text-lg">Terms & Conditions</li>
          </ul>
        </div>
        <div className="w-[35%] flex flex-col justify-center">
          
        <h2 className="text-2xl font-regular py-4 text-gray-800">My Account</h2>
          <ul>
            <li className="text-lg">About us</li>
            <li className="text-lg">Information</li>
            <li className="text-lg">Privacy police</li>
            <li className="text-lg">Terms & Conditions</li>
          </ul>
        </div>
        <div className="w-[25%] flex flex-col justify-end">
          
        <h2 className="text-2xl font-regular py-4 text-gray-800">Owr Offers</h2>
          <ul>
            <li className="text-lg">About us</li>
            <li className="text-lg">Information</li>
            <li className="text-lg">Privacy police</li>
            <li className="text-lg">Terms & Conditions</li>
          </ul>
        </div>
        
      </div>


      <div className="border-t w-[80%] mx-auto border-white mt-12 pt-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-medium text-gray-300">© 2018 Ecommerce theme by www.bisenbaev.com</h2>
          <div className="flex gap-6 space-x-1">
            <div className="bg-gray-700 text-white px-2 py-0 text-xs font-medium">
              <img className="w-6 h-6" src="https://hdpng.com/images/logo-western-union-png-download-png-256px-256.png" alt="" />
            </div>
            <div className="bg-red-500 text-white px-2 py-1 text-xs font-medium">
            <img className="w-6 h-6" src="https://pngimg.com/uploads/mastercard/mastercard_PNG16.png" alt="" />
            </div>
            <div className="bg-blue-500 text-white px-2 py-1 text-xs font-medium">
            <img className="w-6 h-6" src="https://imgs.search.brave.com/3JY0GwG26h6yOk_lJEb8t8e-S6t8R4DWBr1IIAric1o/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBheXBhbC1pY29u/LWRvd25sb2FkLWlu/LXN2Zy1wbmctZ2lm/LWZpbGUtZm9ybWF0/cy0tbG9nby1jcmVk/aXQtZGViaXQtY2Fy/ZC1iYW5rLXBheW1l/bnQtbWV0aG9kcy12/b2wtMi1wYWNrLWJ1/c2luZXNzLWljb25z/LTMyMzAxLnBuZz9m/PXdlYnAmdz0xMjg" alt="" />
            </div>
            <div className="bg-blue-800 text-white px-2 py-1 text-xs font-medium">
            <img className="w-6 h-6" src="https://imgs.search.brave.com/9EBjIM0htdn9g0XnEN5LKMgfPpJUo_ioTfgkSN2xli0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/Mi5jbGVhbnBuZy5j/b20vMjAxODA0MTcv/aGJ3L2tpc3Nwbmct/Y3JlZGl0LWNhcmQt/cGF5bWVudC12aXNh/LWNsaXAtYXJ0LXZp/c2EtNWFkNjk4MGFj/OTY1NzQuMDkwOTU0/OTUxNTI0MDEzMDY2/ODI0OS5qcGc" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

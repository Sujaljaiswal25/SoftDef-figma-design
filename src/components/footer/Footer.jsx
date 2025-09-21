import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-blue-200 min-h-[80vh] w-full flex flex-col justify-center items-center py-16">
      <div className="w-4/5 mx-auto pb-12 flex items-start justify-between gap-8 border-b border-white/50">
        <div className="w-1/3">
          <div className="flex items-center mb-6">
            <div className="bg-blue-400 rounded-lg p-2 mr-3 flex items-center justify-center">
              <div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800">E-Comm</h2>
          </div>
          <p className="text-base text-gray-600 leading-relaxed pr-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever. Since the 1500s, when an unknown printer.
          </p>
        </div>

        <div className="w-1/3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Follow Us
          </h3>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
          <div className="flex gap-4">
            <a href="#" className="social-icon text-blue-800">
              <i className="ri-facebook-fill text-2xl"></i>
            </a>
            <a href="#" className="social-icon text-blue-500">
              <i className="ri-twitter-fill text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="w-1/3">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Contact Us
          </h3>
          <p className="text-base text-gray-600 leading-relaxed">
            E-Comm, 4578
            <br />
            Marmora Road,
            <br />
            Glasgow D04 89GR
          </p>
        </div>
      </div>

      <div className="w-[80%] mx-auto py-6">
        <div className="w-full flex justify-between">
          <div className="w-1/4 flex flex-col">
            <h2 className="text-xl font-normal py-4 text-gray-800">
              Information
            </h2>
            <ul className="list-none p-0 m-0">
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                About Us
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Information
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Privacy Policy
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="w-1/4 flex flex-col">
            <h2 className="text-xl font-normal py-4 text-gray-800">Service</h2>
            <ul className="list-none p-0 m-0">
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                About Us
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Information
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Privacy Policy
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="w-1/4 flex flex-col">
            <h2 className="text-xl font-normal py-4 text-gray-800">
              My Account
            </h2>
            <ul className="list-none p-0 m-0">
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                About Us
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Information
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Privacy Policy
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="w-1/4 flex flex-col">
            <h2 className="text-xl font-normal py-4 text-gray-800">
              Our Offers
            </h2>
            <ul className="list-none p-0 m-0">
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                About Us
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Information
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Privacy Policy
              </li>
              <li className="text-lg text-gray-600 py-1 cursor-pointer hover:text-gray-800">
                Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white w-4/5 mx-auto mt-12 pt-6">
        <div className="flex justify-between items-center">
          <p className="text-base text-gray-500">
            © 2018 Ecommerce theme by www.bisenbaev.com
          </p>
          <div className="flex gap-6 items-center">
            <div className="payment-icon rounded p-2 w-12 h-12 flex items-center justify-center">
              <img
                src="https://hdpng.com/images/logo-western-union-png-download-png-256px-256.png"
                alt="Western Union"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="payment-icon  rounded p-2 w-12 h-12 flex items-center justify-center">
              <img
                src="https://pngimg.com/uploads/mastercard/mastercard_PNG16.png"
                alt="Mastercard"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="payment-icon  rounded p-2 w-12 h-12 flex items-center justify-center">
              <img
                src="https://imgs.search.brave.com/3JY0GwG26h6yOk_lJEb8t8e-S6t8R4DWBr1IIAric1o/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LXBheXBhbC1pY29u/LWRvd25sb2FkLWlu/LXN2Zy1wbmctZ2lm/LWZpbGUtZm9ybWF0/cy0tbG9nby1jcmVk/aXQtZGViaXQtY2Fy/ZC1iYW5rLXBheW1l/bnQtbWV0aG9kcy12/b2wtMi1wYWNrLWJ1/c2luZXNzLWljb25z/LTMyMzAxLnBuZz9m/PXdlYnAmdz0xMjg"
                alt="PayPal"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="payment-icon  rounded p-2 w-12 h-12 flex items-center justify-center">
              <img
                src="https://imgs.search.brave.com/9EBjIM0htdn9g0XnEN5LKMgfPpJUo_ioTfgkSN2xli0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pY29u/Mi5jbGVhbnBuZy5j/b20vMjAxODA0MTcv/aGJ3L2tpc3Nwbmct/Y3JlZGl0LWNhcmQt/cGF5bWVudC12aXNh/LWNsaXAtYXJ0LXZp/c2EtNWFkNjk4MGFj/OTY1NzQuMDkwOTU0/OTUxNTI0MDEzMDY2/ODI0OS5qcGc"
                alt="Visa"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

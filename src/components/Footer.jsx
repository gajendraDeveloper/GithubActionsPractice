import InputField from "../components/common/CommonInputField";
import CommonButton from "../components/common/CommonButton";
import { FaInstagram } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="w-full px-4 sm:px-8 py-10 border-t bg-[#cab5eb] space-y-14">
      
      {/* Brand */}
      <h1 className="
        text-center font-semibold uppercase
        text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[11rem]
      ">
        Studio Polly
      </h1>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-14">

        {/* Subscribe */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase">
            Subscribe and get 10% <br className="hidden sm:block" />
            off your first order
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative">
            <InputField
              placeholder="ENTER YOUR EMAIL"
              styleInput="p-3 rounded-xl w-full border bg-white"
              styleContainer="w-64"
              name="buyEmail"
              type="email"
              errors="email is required"
            />

            <CommonButton
              label="SEND"
              styleLabel="font-semibold"
              styleButton="
                bg-[#ffdb5b] hover:bg-[#ff9b3d]
                px-6 py-4 border rounded-full
                w-full sm:w-auto absolute -top-1 right-32
              "
            />
          </div>
        </div>

        {/* Links */}
        <div className="
          w-full lg:w-1/2
          grid grid-cols-2 sm:grid-cols-3 gap-10
          text-sm uppercase
        ">
          <div className="space-y-4">
            <p className="cursor-pointer" onClick={() => navigate("/home")}>Home</p>
            <p className="cursor-pointer" onClick={() => navigate("/shop")}>Shop</p>
            <p className="cursor-pointer" onClick={() => navigate("/journal")}>Journal</p>
            <p>Contact</p>
          </div>

          <div className="space-y-4">
            <p className="cursor-pointer" onClick={() => navigate("/about")}>About</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>

          <div className="space-y-4">
            <p>Style Guide</p>
            <p>Licensing</p>
            <p>Changelog</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="
        flex flex-col sm:flex-row
        justify-between items-center
        gap-6 pt-8 border-t
      ">
        <p className="text-sm underline text-center sm:text-left">
          Made by Gajendra Rathore, Powered by CARZEN.
        </p>

        <div className="flex gap-5">
          <FaFacebookF size={18} />
          <BsTwitter size={18} />
          <FaInstagram size={18} />
        </div>
      </div>

    </footer>
  );
};

export default Footer;

import CommonButton from "../common/CommonButton";
import InputField from "../common/CommonInputField";

const KeepInTouch = () => {
  return (
    <section className="w-full bg-[#f1ebe4] flex flex-col lg:flex-row border">
      
      {/* Left Orange Section */}
      <div className="w-full lg:w-1/2 p-10 border-r flex justify-center items-center">
        <div className="relative w-[80%] h-64 bg-[#ff9b3d] rounded-t-full flex flex-col items-center justify-center gap-6">
          <p className="text-xl font-semibold text-center leading-tight">
            NEW <br /> COLLECTION
          </p>
          <p className="text-xl font-semibold">APRIL 2022</p>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 p-10 flex justify-center items-center">
        <div className="space-y-6 w-full max-w-md">
          
          <h2 className="text-4xl sm:text-5xl font-semibold text-center">
            KEEP IN TOUCH
          </h2>

          <p className="text-center text-sm sm:text-base">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
          </p>

          {/* Input + Button */}
          <div className="flex flex-col sm:flex-row gap-4 items-center relative">
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
                w-full sm:w-auto transition-colors
                absolute -top-1 right-32
              "
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default KeepInTouch;

import InputField from "../common/CommonInputField"
import CommonButton from "../common/CommonButton"

const SubscribeSection = () => {
  return (
    <div className="bg-[#f1ebe4] w-full h-full flex justify-center border py-16">
        <div className="  space-y-6  lg:mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-5xl font-semibold uppercase text-center">
            Subscribe and get 10% off <br className="hidden sm:block" />
             your first order
          </h3>

          <div className="flex flex-col items-center ml-36  sm:flex-row gap-4 w-full max-w-md relative">
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
    </div>
  )
}

export default SubscribeSection
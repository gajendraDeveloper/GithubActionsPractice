import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CommonButton from "../components/common/CommonButton";
import InputField from "../components/common/CommonInputField";
import { useNavigate } from "react-router-dom";


const signUpValidation = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
})

const SignUp = () => {

    const navigate = useNavigate()

    const {handleSubmit, register, formState: {errors} } = useForm({
        resolver: yupResolver(signUpValidation),
    })
    const onSubmit = (data) => {
      if( data.password === data.confirmPassword) {
        localStorage.setItem("token", data.email);
       navigate("/");
      }else {
        alert("Password doesn't match!")
      }
    }
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-blue-100 to-indigo-300 px-4">
      <div className="flex w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl bg-white">
        <div className="hidden md:block md:w-1/2">
          <img
            src="/product3.jpg"
            alt="login"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 sm:p-10 gap-6">
          <h1 className="text-2xl sm:text-3xl font-bold italic bg-linear-to-r from-[#c1a07b] to-[#43312d] bg-clip-text text-transparent text-center">
          Create Your Account!
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="space-y-4">
              <InputField
                label="Email"
                placeholder="Enter your email"
                name="email"
                styleContainer="flex flex-col gap-1"
                styleInput="w-full rounded-xl outline-none border px-3 py-2 focus:ring-2 focus:ring-orange-400"
                styleLabel="text-gray-500 italic"
                register={register}
                errors={errors}
              />

              <InputField
                label="Password"
                placeholder="Enter password"
                name="password"
                styleContainer="flex flex-col gap-1"
                styleInput="w-full rounded-xl outline-none border px-3 py-2 focus:ring-2 focus:ring-pink-400"
                styleLabel="text-gray-500 italic"
                register={register}
                errors={errors}
              />
              <InputField
                label="Confirm Password"
                placeholder="Enter password"
                name="confirmPassword"
                styleContainer="flex flex-col gap-1"
                styleInput="w-full rounded-xl outline-none border px-3 py-2 focus:ring-2 focus:ring-pink-400"
                styleLabel="text-gray-500 italic"
                register={register}
                errors={errors}
              />
            </div>

            <CommonButton
              label="SignUp"
              type="submit"
              styleLabel="text-lg text-white"
              styleButton="
                w-full py-2 bg-gradient-to-r from-[#c1a07b] to-[#43312d]
                rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer
              "
              styleContainer="flex justify-center"
            />
             <CommonButton
              label="Already a Member? Log In"
              type="button"
              styleLabel="text-lg text-white"
              styleButton="
                w-full py-2 bg-gradient-to-r from-[#95b0b7] to-[#795360] 
                rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer
              "
              styleContainer="flex justify-center"
              onClick={() => navigate("/")}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

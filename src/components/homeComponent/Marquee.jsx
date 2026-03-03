import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CommonList from "../common/CommonList";

const FetchCategory = async () => {
  const response = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return response.data;
};

const Marquee = () => {
  const { data = [], isError } = useQuery({
    queryKey: ["categories"],
    queryFn: FetchCategory,
    suspense: true,
  });

  if (isError) {
    return <p>Error in API call</p>;
  }

  return (
    <div className="overflow-hidden relative py-2 bg-black">
      <div
        className="flex gap-5 whitespace-nowrap animate-marquee"
        style={{ animationDuration: "45s" }}
      >
     
        <CommonList tabs={[...data, ...data]} styleTab="inline-block list-none font-sans italic px-3 py-1 text-white" />
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Marquee;

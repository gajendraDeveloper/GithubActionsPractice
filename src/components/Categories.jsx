import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CommonList from "../components/common/CommonList";

const FetchCategory = async () => {
  console.log("fetch function called");
  const response = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  // console.log("raw data", response.data);
  return response.data;
};
const Categories = () => {
  const { data = [], isError } = useQuery({
    queryKey: ["categories"],
    queryFn: FetchCategory,
    suspense: true,
  });
  // console.log("daata", data);

  if (isError) {
    return <p>Error in api call</p>;
  }
  return (
    <div className="w-64 p-5 bg-green-50 border-2 border-green-200">
      <CommonList tabs={data} styleTab="list-none" />
    </div>
  );
};

export default Categories;

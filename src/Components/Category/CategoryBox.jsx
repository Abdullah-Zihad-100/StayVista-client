/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
const CategoryBox = ({ label, icon: Icon ,selected}) => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const handleClick = () => {
    let currentQuery = {};
    if (params) {
      currentQuery=qs.parse(params.toString);
    }
      const updatedQuery={...currentQuery,category:label}
      const url=qs.stringifyUrl({
        url:'/',
        query:updatedQuery
      })
      navigate(url)
  };

  return (
    <div
      onClick={handleClick}
      className={`text-gray-500 flex flex-col items-center justify-center p-3 ga-2 border-b-2 hover:text-neutral-800 transition
        cursor-pointer ${selected ? "border-b-neutral-800 text-neutral-700" : ""}`}
    >
      <Icon size={"26"} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};
export default CategoryBox;

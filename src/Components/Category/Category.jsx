/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import Container from "../Container.jsx";
import {categories} from "./CategoriesData.js";
import CategoryBox from "./CategoryBox.jsx";
const Category = () => {
    const [params, setParams] = useSearchParams();
    const category=params.get("category")
    console.log(category);

    return (
      <Container>
        <div className="flex p-4 items-center justify-between overflow-x-auto">
          {categories?.map((item) => (
            <CategoryBox
              label={item?.label}
              icon={item?.icon}
              key={item.label}
              selected={category===item?.label}
            />
          ))}
        </div>
      </Container>
    );
}
export default Category;
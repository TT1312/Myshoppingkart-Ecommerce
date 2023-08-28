import "./CatagoryPage.css";
import { useState } from "react";
import List from "../../components/list/List";
import { useParams } from "react-router";
import useFetch from "../../hooks/useFetch";

const CategoryPage = () => {
  const categoryId = parseInt(useParams().id);
  const [maxValue, setmaxValue] = useState(10000);
  const [sort, setSort] = useState(null);
  const [selectCategory, setSelectCategory] = useState([]);

  const { data, loading, error } = useFetch(
    `/categories?[filters][categories][id][$eq]=${categoryId}`
  );

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectCategory(
      isChecked
        ? [...selectCategory, value]
        : selectCategory.filter((element) => element !== value)
    );
  };

  

  return (
    <div className="catagoryPage">
      <div className="leftOfCategoryPage">
        <div className="filterItem">
          <h2>Product Categories</h2>

          {data?.map((element) => (
            <div className="inputItemForCategory" key={element.id}>
              <input
                type="checkbox"
                name=""
                id={element.id}
                value={element.id}
                onChange={handleChange}
              />
              <label htmlFor={element.id}>{element.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className="filterItem">
          <h2>Filter By Price</h2>
          <div className="inputItemForCategory">
            <span>500</span>
            <input
              
              type="range"
              min={500}
              max={10000}
              onChange={(e) => 
                setmaxValue(e.target.value)
              }
            />
            <span>{maxValue}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort By Price(<span className="required">Required</span>)</h2>
          <div className="inputItemForCategory">
            <input
              type="radio"
              name="price"
              id="asc"
              value="asc" 
              onChange={(e) => 
                
                setSort("asc")
              }
            />
            <label htmlFor="asc">Low To High</label>
          </div>
          <div className="inputItemForCategory">
            <input
              type="radio"
              name="price"
              id="desc"
              value="desc"
              onChange={(e) => 
                setSort("desc")
              }
            />
            <label htmlFor="desc">High To Low</label>
          </div>
        </div>
      </div>
      <div className="rightOfCategoryPage">
        <List
          categoryId={categoryId}
          maxValue={maxValue}
          sort={sort}
          selectCategory={selectCategory}
        />
      </div>
    </div>
  );
};

export default CategoryPage;

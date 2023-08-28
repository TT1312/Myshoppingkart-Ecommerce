import "./List.css";
import Card from "../card/Card";
import useFetch from "../../hooks/useFetch";


const List = ({categoryId,maxValue,sort,selectCategory}) => {
  const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id][$eq]=${categoryId}${selectCategory.map(
    (element) => `&[filters][categories][id][$eq]=${element}`
  )}&[filters][price][$lte]=${maxValue}&sort=price:${sort}`);
  console.log(data);
  return (
    <div className="list">
      {error
        ? "Something Went Wrong!!"
        : loading
        ? "Loading..."
        : data?.map((element) => <Card element={element} key={element.id} />)} 
    </div>
  );
};

export default List;

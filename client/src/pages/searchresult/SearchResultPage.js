import './SearchPage.css'
import { useParams } from "react-router-dom"
import useFetch from '../../hooks/useFetch';
import Card from '../../components/card/Card';

const SearchResultPage = () => {
  const { query } = useParams();
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][title][$contains]=${query}`);
  console.log(data);
  return (
    <div className='searchPage'>
      <div className="wrapperSearchPage">
        {error ?
          "Something Wrong"
          : loading ?
            "Loading...."
            : data?.map((element) => <Card element={element} key={element.id} />)

        }
      </div>


    </div>
  )
}

export default SearchResultPage
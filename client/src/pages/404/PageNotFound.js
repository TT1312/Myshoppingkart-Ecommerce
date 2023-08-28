import './PageNotFound.css'
import noresult from '../../assets/no-results.png'
const PageNotFound = () => {
  return (
    <div className='pagenotfound'>
      <img src={noresult} alt="" />
      <h1>Page Not Found</h1>
    </div>
  )
}

export default PageNotFound
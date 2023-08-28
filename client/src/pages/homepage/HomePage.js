
import './HomePage.css'
import Slider from '../../components/slider/Slider'
import FeaturedProduct from '../../components/featuredProduct/FeaturedProduct'
import HomePageCatagories from '../../components/homepagecategories/HomePageCatagories'
import Contact from '../../components/contact/Contact'
const HomePage = () => {

  return(
    <div>
      <Slider />
      <FeaturedProduct type="Featured"/>
      <HomePageCatagories />
      <FeaturedProduct type="Trending"/>
      <Contact />
    </div>
  )
}

export default HomePage
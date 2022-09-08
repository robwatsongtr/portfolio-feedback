import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import CurrentUserInfo from "../../components/currentUserInfo/CurrentUserInfo"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
      <CurrentUserInfo />
      <FeaturedInfo />
    </div>
  )
}

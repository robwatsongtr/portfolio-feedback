import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import CurrentUserInfo from "../../components/currentUserInfo/CurrentUserInfo"
import "./home.css"
import FundSummaryWidget from "../../components/fundSummaryWidget/FundSummaryWidget"

export default function Home() {
  return (
    <div className="home">
      <CurrentUserInfo />
      <FeaturedInfo />
      <div className="homeWidgets">
        <FundSummaryWidget />
      </div>
    </div>
  )
}

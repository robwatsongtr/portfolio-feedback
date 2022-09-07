import "./featuredInfo.css"
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="featured">

      <div className="featuredItem">
        <span className="featuredTitle">Objective</span>
        <div className="featuredContainer">
          <span className="featuredValue">Income</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Model Portfolio</span>
        <div className="featuredContainer">
          <span className="featuredValue">Growth and Income</span>  
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Change Threshold</span>
        <div className="featuredContainer">
          <span className="featuredValue">0.33</span>
        </div> 
      </div>

    </div>
    
  );
}

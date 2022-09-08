import "./currentUserInfo.css"
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
  return (
    <div className="currentUser">

      <div className="currentUserItem">
        <span className="currentUserTitle">User</span>
        <div className="currentUserContainer">
          <span className="currentUserValue">MN</span>
        </div>
      </div>

      <div className="currentUserItem">
        <span className="currentUserTitle">Feedback Date</span>
        <div className="currentUserContainer">
          <span className="currentUserValue">2022-08-19</span>  
        </div>
      </div>

    </div>
    
  );
}

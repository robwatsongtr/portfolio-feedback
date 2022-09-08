import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
} from "@material-ui/icons";


export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="sidebarWrapper">

            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Dashboard</h3>
              <ul className="sidebarList">
                
                <li className="sidebarListItem active">
                  <LineStyle className="sidebarIcon" />
                  Home
                </li>
                
                <li className="sidebarListItem">
                  <Timeline className="sidebarIcon" />
                  This 
                </li>
                <li className="sidebarListItem">
                  <TrendingUp className="sidebarIcon" />
                  That
                </li>
              </ul>
            </div>

            <div className="sidebarMenu">
              <h3 className="sidebarTitle">Quick Menu</h3>
              <ul className="sidebarList">
                
                  <li className="sidebarListItem">
                    <PermIdentity className="sidebarIcon" />
                    This 
                  </li>
                
                
                  <li className="sidebarListItem">
                    <Storefront className="sidebarIcon" />
                    That
                  </li>
                
                <li className="sidebarListItem">
                  <AttachMoney className="sidebarIcon" />
                  Something
                </li>
                <li className="sidebarListItem">
                  <BarChart className="sidebarIcon" />
                  Else
                </li>
              </ul>
            </div>

            

      </div>

    </div>
  );
}
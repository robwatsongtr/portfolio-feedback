import React from 'react'
import './topbar.css'
import { NotificationsNone, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="logo">Portfolio Feedback</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

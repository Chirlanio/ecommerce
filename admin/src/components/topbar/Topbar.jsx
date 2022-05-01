import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">E-commerce</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2022/01/11/12/07/animal-6930449_960_720.jpg"
            alt="logo"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  )
}

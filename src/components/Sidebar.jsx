import React, { useState } from 'react'
import '../styles/Sidebar.css'
import { assets } from '../assets/assets'

export default function Sidebar() {

  const [extended ,setExtended] = useState(false)

  return (
    <div className='sidebar'>


        <div className="top">
            <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
               {extended?<p>New chat</p>:null}
            </div>
            {extended?  <div className="recent">
                <p className="recent-title"></p>
                <div className="recent-entries">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ...</p>
                </div>
            </div>:null}
          
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entries">
                <img src={assets.question_icon} alt="" />
              {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entries">
                <img src={assets.history_icon} alt="" />
              {extended?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entries">
                <img src={assets.setting_icon} alt="" />
               {extended?<p>Settings</p>:null}
            </div>
        </div>

    </div>
  ) 
}

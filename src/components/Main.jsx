import React, { useContext } from 'react'
import '../styles/Main.css'
import { assets } from '../assets/assets'
import { Context } from '../Context/Context'

export default function Main() {

    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gyani Baba</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult?<>
                <div className="greet">
            <p><span>Hello, Vaths</span></p>
            <p>Kya jaana chate ho aaj ?</p>    
            </div> 
            <div className="cards">
                <div className="card">
                    <p>Explore new thing with Gemini</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Get new ideas for you project</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Helps you in drafting official paperworks</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Help you to debug your code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>: <div className='result'>
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        {loading?<div className='loader'>
                             <hr />
                             <hr />
                             <hr />
                        </div>: <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                       
                    </div>
                 </div> }

            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='enter prompt' />
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                  {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}  
                </div>
                <p className="bottom-info">
                    Note:The results are generated on the based of machine learning, it might not be accurate( all features are now working now)
                </p>
            </div>
        </div>
    </div>
  )
}

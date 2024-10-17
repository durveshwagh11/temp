import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>PVGCOE</p>
        <img src={assets.user_icon} alt="User Icon" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello</span>
          </p>
          <p>How can I help you Today?</p>
        </div>
        <div className='cards'>
            <div className="card">
                <p>add later</p>
                <img src= {assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>add later</p>
                <img src= {assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>add later</p>
                <img src= {assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>add later</p>
                <img src= {assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <img src={assets.gallery_icon} alt="Gallery Icon" className="icon" />
            <img src={assets.send_icon} alt="Send Icon" className="icon" />
          </div>
          <div>
            <p className="bottom-info">
            GPT can make mistakes. Check important info
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

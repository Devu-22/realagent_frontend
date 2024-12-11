import React from 'react';
import './BotShop.css'; // Import CSS for styling
import botshopIMG from './assets/botshopIMG.jpg'; // Import bot shop demo image
import play from './assets/Play.png'; // Import play button image
import { AgentLayout } from "../../layout";
import { useNavigate } from 'react-router-dom';


const BotShop: React.FC = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBuyClick = () => {
    navigate("/waitlist"); // Redirect to "/waitlist"
  };
  return (
    <div className="botshop-container">
      <AgentLayout/>
      {/* Main Content */}
      <main className="main-content">
        {/* Bot Details */}
        <section className="bot-details">
          <div className="bot-shop-box">
            {/* Bot Title, Subtitle, Price, and Buy Button */}
            <div className="bot-shop-header">
              <div className="bot-shop-header-left">
                <h1 className="bot-title">Market Analysis Bot</h1>
                <p className="bot-subtitle">Schedule your meeting</p>
              </div>
              <div className="bot-shop-header-right">
                <div className="price-and-button">
                  <p className="bot-price">$12/month</p>
                  <button className="buy-btn" onClick={handleBuyClick}><b>BUY</b></button>
                </div>
              </div>
            </div>
          </div>

          {/* Bot Image and Play Button */}
          <div className="bot-image-container">
            <img
              src={botshopIMG} 
              alt="Bot demo"
              className="rounded-image"
            />
            <button className="play-button">
              <img src={play} alt="Play Button" />
            </button>
          </div>

          {/* Description Section */}
          <div className="description-box">
            <h2>Description</h2>
            <p>
            <b>Real-Time Monitoring</b>: Tracks market dynamics, including price changes, stock levels, and news updates.<br />
            <b>Data Integration:</b> Combines internal sales data with external market data for a 360° analysis.<br />  
            <b>Customizable Dashboards:</b> Offers tailored analytics dashboards to focus on specific industries or business needs.<br />
            <b>AI-Driven Recommendations:</b> Provides actionable insights based on predictive analytics and historical trends.<br />
            <b>Collaborative Features:</b> Enables team collaboration with shared reports and insights.
            </p>
          </div>

          {/* Use Cases Section */}
          <div className="use-cases-box">
            <h2>Use Cases</h2>
            <ul>
              <li><b>Competitor Analysis</b><br/> Tracks competitors' pricing, promotions, and product launches in real-time.
              Provides detailed reports on market positioning and strategiesTracks competitors' pricing, promotions, and product launches in real-time.
              Provides detailed reports on market positioning and strategies</li>
              <li><b>Trend Identification</b><br/> Analyzes social media, news articles, and forums to detect emerging trends in specific industries.
              Predicts upcoming demand patterns.</li>
              <li><b>Customer Sentiment Analysis</b><br/> Uses natural language processing to gauge consumer sentiment toward brands and products.
              Provides insights from reviews, surveys, and social media</li>
              <li><b>Demand Forecasting</b><br/> Predicts future market demands using historical data and advanced machine learning algorithms.
              Assists in inventory and supply chain optimization.</li>
              <li><b>Investment Opportunity Spotting</b><br/> Identifies high-growth sectors or businesses by analyzing financial data and market movements.
              Recommends potential investment areas based on risk and profitability metrics.</li>
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="benefits-box">
            <h2>Benefits</h2>
            <ul>
              <li><b>Enhanced Decision-Making</b><br/>
              Provides accurate and timely data, enabling smarter strategic planning.</li>
              <li><b>Cost Efficiency</b><br/>
              Automates research and analysis tasks, reducing time and labor costs.</li>
              <li><b>Competitive Edge</b><br/>
              Keeps businesses ahead by identifying opportunities and threats before competitors.</li>
              <li><b>Improved Customer Understanding</b><br/>
              Helps tailor marketing campaigns and product strategies to meet customer needs.</li>
              <li><b>Scalability</b><br/>
              Supports businesses of all sizes, from startups to enterprises, with customizable tools.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BotShop;

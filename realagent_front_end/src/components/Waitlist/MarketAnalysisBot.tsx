import { FC } from "react";
import "./MarketAnalysisBot.css";
import { Flex } from "@mantine/core";
// Functional Component with TypeScript
const MarketAnalysisBot: FC = () => {
  return (
    
    <Flex className="market-analysis-bot">
      <div className="content">
        <h1 className="title">Market Analysis Bot</h1>
        <p className="subtitle">Schedule your meeting</p>
      </div>
    </Flex>
  );
};

export default MarketAnalysisBot;

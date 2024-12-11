import { Flex } from "@mantine/core";
import { AgentLayout } from "../../layout";
import MarketAnalysisBot from "../../components/Waitlist/MarketAnalysisBot";
import WaitlistConfirmation from "../../components/Waitlist/WaitlistConfirmation";
import UserCount from "../../components/UserList";
// import "./Waitlist.css";

const Waitlist = () => {
  return (
    <Flex 
      direction="column">
      <AgentLayout />
      <MarketAnalysisBot />
      <WaitlistConfirmation />
      <UserCount />
    </Flex>
  );
};

export default Waitlist;

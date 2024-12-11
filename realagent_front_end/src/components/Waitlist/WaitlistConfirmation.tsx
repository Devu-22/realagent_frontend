// import { FC } from "react";
// import { Card, Text, Stack } from "@mantine/core";

// const WaitlistConfirmation: FC = () => {
//   return (
//     <Card
//       shadow="sm"
//       padding="lg"
//       withBorder
//       style={{
//         borderRadius: "15px",
//         boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#ffffff",
//         margin: "16px auto",
//         maxWidth: "750px",
//         width: "80%",
//         textAlign: "center",
//       }}
//     >
//       <Stack>
//         <Text
//           size="lg"
          
//           color="#007bff"
//           style={{ marginBottom: "8px" }}
//         >
//           You're on the Waitlist — Your Spot is Reserved!
//         </Text>
//         <Text size="sm" color="#333333">
//           Thank you for signing up! You're currently{" "}
//           <Text component="span" color="#007bff">
//             #225
//           </Text>{" "}
//           on the list. We’ll notify you as soon as we expand capacity.
//         </Text>
//         {/* <Divider my="sm" style={{ width: "100%" }} />
//         <Group>
//           <Text size="sm">
//             Share on:
//           </Text>
//           <Group>
//             <Text>Facebook</Text>
//             <Text>Twitter</Text>
//             <Text>LinkedIn</Text>
//           </Group>
//         </Group> */}
//       </Stack>
//     </Card>
//   );
// };

// export default WaitlistConfirmation;


import { FC } from "react";
import "./WaitlistConfirmation.css";
import { Flex } from "@mantine/core";

const WaitlistConfirmation: FC = () => {
  return (
    <Flex className="waitlist-confirmation">
      <div className="waitlist-content">
        <h1 className="waitlist-title">
          You're on the Waitlist — Your Spot is Reserved!
        </h1>
        <p className="waitlist-text">
          Thank you for signing up! You're currently{" "}
          <span className="waitlist-highlight">#225</span> on the list. We’ll
          notify you as soon as we expand capacity.
        </p>
      </div>
    </Flex>
  );
};

export default WaitlistConfirmation;


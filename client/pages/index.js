import { Box, Heading } from "@chakra-ui/react";
import SignUpForm from "./signup";
export default function Home() {
  return (
    <div>
      <Box textAlign='center'>
        <Heading size='xl'>Welcome to Radio Station</Heading>
      </Box>
      <SignUpForm />
    </div>
  );
}

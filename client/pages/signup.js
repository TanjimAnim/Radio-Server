import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

export default function SignUpForm() {
  return (
    <>
      <Box
        display='flex'
        flexDir='column'
        justifyContent='center'
        height='88vh'
      >
        <Box
          boxShadow='md'
          borderRadius='md'
          paddingTop='10px'
          paddingRight='10px'
          paddingLeft='10px'
          paddingBottom='20px'
          width={{ base: "90%", md: "50%", lg: "50%", xl: "50%" }}
          marginLeft='auto'
          marginRight='auto'
        >
          <Box>
            <Heading textAlign='center' size='lg' fontWeight={700}>
              Sign Up
            </Heading>
          </Box>
          <Box width='100%'>
            <form>
              <FormControl id='email' isRequired>
                <FormLabel fontSize='18px'>Email address</FormLabel>
                <Input
                  type='email'
                  placeholder='type your email here'
                  _focus={{
                    zIndex: "0",
                    borderColor: "#3182ce",
                  }}
                />
              </FormControl>

              <FormControl id='password' isRequired>
                <FormLabel fontSize='18px'>Password</FormLabel>
                <Input
                  type='password'
                  placeholder='type your password here'
                  _focus={{
                    zIndex: "0",
                    borderColor: "#3182ce",
                  }}
                />
              </FormControl>
              <FormControl id='confirm-password' isRequired>
                <FormLabel fontSize='18px'>Confirm Password</FormLabel>
                <Input
                  type='password'
                  placeholder='confirm password'
                  _focus={{
                    zIndex: "0",
                    borderColor: "#3182ce",
                  }}
                />
              </FormControl>
            </form>
          </Box>

          <Box textAlign='center'>
            <Text>Or</Text>
          </Box>
          <Box marginRight='auto' marginLeft='auto'>
            <Button
              w={"full"}
              maxW={"md"}
              variant={"outline"}
              leftIcon={<FcGoogle />}
            >
              <Text>Sign Up with Google</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

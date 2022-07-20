import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

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
              <Box
                as='button'
                mt='2%'
                p={2}
                color='white'
                fontWeight='bold'
                borderRadius='md'
                bgGradient='linear(to-r, teal.500,green.500)'
                _hover={{
                  bgGradient: "linear(to-r, red.500, yellow.500)",
                }}
                type='submit'
                value='Submit'
              >
                Submit
              </Box>
            </form>
          </Box>

          <Box textAlign='center'>
            <Text fontSize='lg' fontWeight={600}>
              Or
            </Text>
          </Box>
          <Box marginRight='auto' marginLeft='auto'>
            <Center>
              <Button
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
              >
                <Text>Sign Up with Google</Text>
              </Button>
            </Center>
          </Box>
          <Box textAlign='center'>
            <Text fontSize='lg' fontWeight={700}>
              Already have an account? <Link href='/signin'>Sign In here!</Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}

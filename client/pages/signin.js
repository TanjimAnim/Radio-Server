import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Text,
  Button,
  Heading,
  Center,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../context/authContext";
import { useRouter } from "next/router";
import { MdOutlineError } from "react-icons/md";

import Link from "next/link";
import axios from "axios";

export default function SignInForm() {
  const { setIsAuthed, setToken } = useAuthContext();
  var router = useRouter();
  var [input, setInput] = useState({
    user_email: "",
    user_password: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const handleChange = (event) => {
    input[event.target.name] = event.target.value;
    setInput(input);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setIsloading(true);

    const response = await axios
      .post("http://localhost:3080/v1/login", {
        email: `${input.user_email}`,
        password: `${input.user_password}`,
      })
      .then(function (response) {
        console.log(response.data.accesstoken);
        setToken(response.data.accesstoken);
        setIsAuthed(true);
        setIsloading(false);
        router.push("/dashboard");
      })
      .catch(function (error) {
        console.log(error.response.data);
        setError({ error: `${error.response.data}` });
        setIsAuthed(false);
        setIsloading(false);
        router.push("/signin");
      });
  };
  return (
    <>
      {isLoading ? (
        <Box
          display='flex'
          flexDir='column'
          justifyContent='center'
          height='88vh'
        >
          <Box marginLeft='auto' marginRight='auto'>
            <Box>
              <Text fontSize='xl' fontWeight={700}>
                {" "}
                Please Wait....
              </Text>
            </Box>
            <Box paddingLeft='33px'>
              <Spinner size='xl' />
            </Box>
          </Box>
        </Box>
      ) : (
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
                Sign In
              </Heading>
            </Box>
            <Box width='100%'>
              <form onSubmit={handleSubmit}>
                <FormControl id='email' isRequired>
                  <FormLabel fontSize='18px'>Email address</FormLabel>
                  <Input
                    type='email'
                    placeholder='type your email here'
                    _focus={{
                      zIndex: "0",
                      borderColor: "#3182ce",
                    }}
                    name='user_email'
                    value={input.email}
                    onChange={handleChange}
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
                    name='user_password'
                    value={input.password}
                    onChange={handleChange}
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
            {error ? (
              <Box
                display='flex'
                justifyContent='space-between'
                marginTop='5px'
                padding='1rem'
                backgroundColor=' #c21a0e'
                color='white'
                fontSize='lg'
                fontWeight={600}
                borderRadius='6px'
              >
                <Box display='flex' flexDirection='row' alignItems='center'>
                  <MdOutlineError />
                  <Text marginLeft='6px'>{error.error}</Text>
                </Box>
                <Box display='flex' flexDirection='row'></Box>
              </Box>
            ) : (
              <></>
            )}

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
                  <Text>Sign In with Google</Text>
                </Button>
              </Center>
            </Box>
            <Box textAlign='center'>
              <Text fontSize='lg' fontWeight={700}>
                Don&apos;t have an account? <Link href='/'>Sign Up here!</Link>
              </Text>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

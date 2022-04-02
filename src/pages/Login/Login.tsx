import React, { useContext, useEffect } from "react";
import MailxLogo from "assets/logo.png";
import GoogleButton from "components/GoogleButton";
import OutlookButton from "components/OutlookButton";
import { AuthContext } from "contexts/Auth/index";
import {
  useToast,
  Flex,
  Stack,
  Text,
  Spacer,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";

const Login: React.FC<{}> = () => {
  const { error } = useContext(AuthContext);
  const toast = useToast();

  useEffect(() => {
    if (error) {
      toast({
        title: "Oh no :(",
        description:
          "Something just happened trying to log in. Try it again later.",
        status: "error",
        position: "bottom-right",
        isClosable: true,
      });
    }
  }, [error, toast]);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={1}
        maxW={"md"}
        rounded={"xl"}
        boxShadow={"xl"}
        p={6}
        my={12}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Stack align="center">
          <Image
            src={MailxLogo}
            boxSize={"300px"}
            rounded="md"
            align={"center"}
          />
          <Text fontSize={"large"}>Connect your email account</Text>
        </Stack>
        <Spacer />
        <Stack spacing={3}>
          <GoogleButton />
          <OutlookButton />
        </Stack>
      </Stack>
    </Flex>
  );
};

export default Login;

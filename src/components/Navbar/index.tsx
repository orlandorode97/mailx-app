import React from "react";
import MailxLogo from "assets/logo-without-bg.png";
import {
  IconButton,
  useColorModeValue,
  FlexProps,
  Flex,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";

import { FiMenu } from "react-icons/fi";
import UserInfo from "components/User";

interface INavbarProps extends FlexProps {
  onOpen: () => void;
}

const Navbar: React.FC<INavbarProps> = ({ onOpen, ...rest }: INavbarProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      <HStack alignItems={"center"}>
        <Box>
          <Image src={MailxLogo} height="40px" width="50px" />
        </Box>
      </HStack>
      <UserInfo />
    </Flex>
  );
};

export default Navbar;

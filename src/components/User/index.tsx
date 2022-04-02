import React, { useContext } from "react";
import { UserContext } from "../../contexts/Users/index";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from "@chakra-ui/react";
import { useCookies } from "react-cookie";
import { MAILX_COOKIE_SUCCESS } from "../../constants/auth";
import authService from "../../services/Auth/index";

const UserInfo: React.FC<{}> = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [, , removeCookie] = useCookies();

  const onSignOut = async () => {
    await authService.logout();
    removeCookie(MAILX_COOKIE_SUCCESS);
    navigate("/login", {
      replace: true,
    });
  };

  const userInfo = (
    <HStack spacing={{ base: "0", md: "6" }}>
      <Flex alignItems={"center"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Image
                rounded="full"
                src={user?.picture}
                width="50px"
                height="50px"
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{user?.name}</Text>
              </VStack>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem onClick={onSignOut}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );

  return <>{user && userInfo}</>;
};

export default UserInfo;

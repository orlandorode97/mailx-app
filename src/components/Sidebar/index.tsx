import React, { useContext } from "react";
import Compose from "components/Compose";
import { LabelsContext } from "../../contexts/Labels/index";
import { MAIN_LABELS, DEFAULT_LABEL_COLOR } from "../../constants/labels";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  BoxProps,
  Container,
} from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa";
import NavItem from "components/NavItem";

interface ISidebarProps extends BoxProps {
  onClose: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  onClose,
  ...rest
}: ISidebarProps) => {
  const { labels } = useContext(LabelsContext);

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      boxShadow="md"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Compose />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {MAIN_LABELS.map((link) => (
        <NavItem key={link.name} icon={link.icon} iconSize={18}>
          {link.name}
        </NavItem>
      ))}
      <Container
        borderTop={"1px"}
        borderColor={useColorModeValue("gray.400", "gray.700")}
        marginTop="3"
        padding="5"
      >
        <Text
          casing="uppercase"
          color={useColorModeValue("gray.400", "gray.700")}
          fontWeight="bold"
        >
          Labels
        </Text>
      </Container>
      {labels &&
        labels.map((label) => (
          <NavItem
            key={label.id}
            icon={FaBookmark}
            iconSize={15}
            iconColor={
              label.color?.backgroundColor
                ? label.color.backgroundColor
                : DEFAULT_LABEL_COLOR
            }
          >
            {label.name.toLocaleLowerCase()}
          </NavItem>
        ))}
    </Box>
  );
};

export default Sidebar;

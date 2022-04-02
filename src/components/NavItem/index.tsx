import React, { ReactText } from "react";
import { IconType } from "react-icons";
import { Link, Icon, Flex } from "@chakra-ui/react";

interface INavItemProps {
  icon: IconType;
  children: ReactText;
  iconSize: number;
  iconColor?: string;
}

const NavItem: React.FC<INavItemProps> = ({
  icon,
  children,
  iconSize,
  iconColor = "currentColor",
  ...rest
}: INavItemProps) => {
  const renderLabelText = () => {
    let text = children.toString().includes("category")
      ? children.toString().split("_")[1]
      : children.toString();

    return text.charAt(0).toUpperCase() + text.slice(1);
  };

  return (
    <Link href="#" style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        p="2"
        mx="5"
        borderRadius="lg"
        _hover={{
          bg: "gray.200",
          color: "gray.800",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize={iconSize}
            color={iconColor}
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {renderLabelText()}
      </Flex>
    </Link>
  );
};

export default NavItem;
function useColorModeValue(arg0: string, arg1: string): string | undefined {
  throw new Error("Function not implemented.");
}

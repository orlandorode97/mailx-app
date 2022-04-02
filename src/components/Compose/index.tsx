import React from "react";
import HiIcon from "components/HiIcon";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Icon, Stack, Button } from "@chakra-ui/react";

const Compose: React.FC<{}> = () => {
  return (
    <Stack align={"center"}>
      <Button
        leftIcon={<HiOutlinePencilAlt />}
        colorScheme="red"
        variant="outline"
      >
        Compose
      </Button>
    </Stack>
  );
};

export default Compose;

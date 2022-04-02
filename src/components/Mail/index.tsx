import React, { useContext, useState } from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  useColorModeValue,
  Flex,
  Spacer,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { format, isAfter } from "date-fns";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MessageContext, IMessage } from "../../contexts/Messages/index";
import { MailModalContext } from "contexts/MailModal";

interface IMail {
  subject: string | undefined;
  from: string | undefined;
  message: IMessage;
}

const Mail: React.FC<IMail> = ({ subject, from, message }: IMail) => {
  const [favorite, setFavorite] = useState(false);
  const { setMailHtml } = useContext(MessageContext);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const { openModal } = useContext(MailModalContext);

  const onAddFavorite = () => {
    setFavorite(!favorite);
  };

  const getFrom = (value: string) => {
    if (!value) {
      return "";
    }

    return value.split("<")[0];
  };

  const dateFormat = (dateReceived: number) => {
    if (!dateReceived) {
      return "";
    }
    let midnight = new Date().setHours(0, 0, 0, 0);
    let date = new Date(dateReceived);
    if (isAfter(date, new Date(midnight))) {
      return format(date, "HH:mm aaaa");
    }
    return format(date, "MMM dd");
  };

  const onClickMail = () => {
    if (!isLargerThan768) {
      openModal();
    }

    if (setMailHtml) {
      setMailHtml(message.html);
    }
  };

  return (
    <Box
      boxShadow="xs"
      bgColor={Math.round(Math.random() * 1) === 0 ? "white" : "gray.100"}
      onClick={onClickMail}
    >
      <Stack p={2}>
        <Flex>
          <Text
            textTransform={"uppercase"}
            color={"gray.500"}
            fontWeight={800}
            fontSize={"sm"}
          >
            {subject}
          </Text>
          <Spacer />
          <Text fontSize={"sm"} color={"gray.400"}>
            {dateFormat(+message.internalDate)}
          </Text>
        </Flex>
        <Heading color={useColorModeValue("gray.700", "white")} fontSize={"sm"}>
          {getFrom(from || "")}
        </Heading>
        <Flex>
          <Text color={"gray.500"} fontSize="sm" noOfLines={2}>
            {message.snippet}
          </Text>
          <Spacer />
          <Icon
            onClick={onAddFavorite}
            as={favorite ? FaStar : FaRegStar}
            fontSize={18}
            color={favorite ? "yellow.400" : "black"}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default React.memo(Mail);

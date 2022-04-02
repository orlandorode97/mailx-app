import React from "react";
import { Stack, Text, Flex, Icon, createIcon } from "@chakra-ui/react";

const EmptyMailView: React.FC<{}> = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      justify={{ base: "center", md: "space-around", xl: "space-around" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="nowrap"
      display={{ base: "none", md: "flex" }}
      minH="90vh"
    >
      <Stack align="center">
        <Icon as={NotificationIcon} w={24} h={24} />
        <Stack align={"center"} spacing={2}>
          <Text fontSize={"lg"} color={"gray.500"}>
            Select an element to get preview
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
};

const NotificationIcon = createIcon({
  displayName: "Notification",
  viewBox: "0 0 64 64",
  path: (
    <svg xmlns="http://www.w3.org/2000/svg">
      <radialGradient
        id="jUSv56w43tV131KS5vdVHa"
        cx="32"
        cy="34"
        r="32"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#9ceeff" />
        <stop offset=".642" stopColor="#c5f5ff" />
        <stop offset="1" stopColor="#dcf9ff" />
      </radialGradient>
      <path
        fill="url(#jUSv56w43tV131KS5vdVHa)"
        d="M3,3c0-1.657,1.343-3,3-3s3,1.343,3,3S7.657,6,6,6S3,4.657,3,3z M60,58c-1.657,0-3,1.343-3,3	s1.343,3,3,3s3-1.343,3-3S61.657,58,60,58z M60.302,43H44v-7h14.828c2.089,0,3.955-1.527,4.153-3.607C63.209,30.007,61.339,28,59,28	H44v-8h15.828c2.089,0,3.955-1.527,4.153-3.607C64.209,14.007,62.339,12,60,12H47c-1.657,0-3-1.343-3-3s1.343-3,3-3h2.03	C50.67,6,52,4.67,52,3.029V2.971C52,1.33,50.67,0,49.03,0H14.97C13.33,0,12,1.33,12,2.971V3.03C12,4.67,13.33,6,14.97,6h1.53	C18.433,6,20,7.567,20,9.5S18.433,13,16.5,13H3.698c-1.895,0-3.594,1.419-3.693,3.312C-0.101,18.331,1.505,20,3.5,20H20v5H5	c-2.209,0-4,1.791-4,4s1.791,4,4,4h15v8H4.172c-2.089,0-3.955,1.527-4.153,3.606C-0.209,46.992,1.661,49,4,49h10	c2.209,0,4,1.791,4,4v1c0,2.209-1.791,4-4,4h-0.889c-1.451,0-2.781,0.981-3.054,2.406C9.689,62.323,11.149,64,13,64h37.889	c1.451,0,2.781-0.981,3.054-2.406C54.311,59.677,52.851,58,51,58h-1c-2.209,0-4-1.791-4-4s1.791-4,4-4h10.5	c1.995,0,3.601-1.669,3.495-3.688C63.896,44.419,62.197,43,60.302,43z"
      />
      <linearGradient
        id="jUSv56w43tV131KS5vdVHb"
        x1="32"
        x2="32"
        y1="-1.873"
        y2="71.552"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#005ce2" />
        <stop offset=".278" stopColor="#0080e8" />
        <stop offset=".569" stopColor="#009ced" />
        <stop offset=".82" stopColor="#00b0f1" />
        <stop offset="1" stopColor="#00b5f2" />
      </linearGradient>
      <path
        fill="url(#jUSv56w43tV131KS5vdVHb)"
        d="M18,8h28c5.523,0,10,4.477,10,10v28c0,5.523-4.477,10-10,10H18c-5.523,0-10-4.477-10-10V18	C8,12.477,12.477,8,18,8z"
      />
      <path
        fill="#fff"
        d="M24.53,30.18l-10.29,12C14.09,41.82,14,41.42,14,41V23c0-0.54,0.14-1.04,0.38-1.47L24.53,30.18z"
      />
      <path
        fill="#fff"
        d="M30.59,32.71l-14.67-12.5C16.25,20.07,16.62,20,17,20h30c0.4,0,0.78,0.08,1.13,0.23L34.41,32.65	C33.37,33.59,31.66,33.62,30.59,32.71z"
      />
      <path
        fill="#fff"
        d="M38.27,31.85l10.12,11.81C47.98,43.88,47.5,44,47,44H17c-0.5,0-0.98-0.12-1.39-0.34l10.44-12.19	l3.24,2.76c0.89,0.75,2.01,1.17,3.18,1.17c1.21,0,2.38-0.45,3.28-1.27L38.27,31.85z"
      />
      <path
        fill="#fff"
        d="M50,23v18c0,0.42-0.09,0.82-0.24,1.18L39.75,30.51l9.89-8.94C49.87,21.99,50,22.48,50,23z"
      />
      <linearGradient
        id="jUSv56w43tV131KS5vdVHc"
        x1="16.502"
        x2="16.502"
        y1="3.541"
        y2="58.639"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#005ce2" />
        <stop offset=".278" stopColor="#0080e8" />
        <stop offset=".569" stopColor="#009ced" />
        <stop offset=".82" stopColor="#00b0f1" />
        <stop offset="1" stopColor="#00b5f2" />
      </linearGradient>
      <path
        fill="url(#jUSv56w43tV131KS5vdVHc)"
        d="M24.99,10.24c0.15,1.5-1.02,2.76-2.49,2.76H15c-0.55,0-1.05,0.22-1.41,0.59	C13.22,13.95,13,14.45,13,15c0,1.1,0.9,2,2,2h1.5c0.83,0,1.5,0.67,1.5,1.5S17.33,20,16.5,20H8v-2c0-5.52,4.48-10,10-10h4.36	C23.67,8,24.86,8.94,24.99,10.24z"
      />
      <linearGradient
        id="jUSv56w43tV131KS5vdVHd"
        x1="47.998"
        x2="47.998"
        y1="5.823"
        y2="63.776"
        gradientTransform="matrix(1 0 0 -1 0 66)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#005ce2" />
        <stop offset=".278" stopColor="#0080e8" />
        <stop offset=".569" stopColor="#009ced" />
        <stop offset=".82" stopColor="#00b0f1" />
        <stop offset="1" stopColor="#00b5f2" />
      </linearGradient>
      <path
        fill="url(#jUSv56w43tV131KS5vdVHd)"
        d="M40.01,53.76C39.86,52.26,41.03,51,42.5,51H47c0.55,0,1.05-0.22,1.41-0.59	C48.78,50.05,49,49.55,49,49c0-1.1-0.9-2-2-2h-1.5c-0.83,0-1.5-0.67-1.5-1.5s0.67-1.5,1.5-1.5H56v2c0,5.52-4.48,10-10,10h-3.36	C41.33,56,40.14,55.06,40.01,53.76z"
      />
    </svg>
  ),
});

export default EmptyMailView;

import React from "react";
import OutlookLogo from "assets/outlook.png";
import { Button, Image, Text } from "@mantine/core";

const {
  REACT_APP_OUTLOOK_URL,
  REACT_APP_OUTLOOK_AUTHORIZE_URL,
  REACT_APP_OUTLOOK_CLIENT_ID,
  REACT_APP_OUTLOOK_RESPONSE_TYPE,
  REACT_APP_OUTLOOK_RESPONSE_MODE,
  REACT_APP_OUTLOOK_REDIRECT_URI,
  REACT_APP_OUTLOOK_SCOPE,
} = process.env;

const OutlookButton: React.FC<{}> = () => {
  return (
    <Button variant="outline" name="outlook" fullWidth>
      <Image src={OutlookLogo} className="max-auto h-8 w-8 mx-1" />
      <Text className="mx-1" color="blue">
        Outlook / Hotmail
      </Text>
    </Button>
  );
};

export default OutlookButton;

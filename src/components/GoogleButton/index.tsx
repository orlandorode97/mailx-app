import React, { useEffect, useState } from "react";
import GmailLogo from "assets/gmail.png";
import { Button, Image, Text } from "@mantine/core";

const GoogleButton: React.FC<{}> = () => {
  const [authUrl, setAuthUrl] = useState<string>("");

  const getAuthUrl = async () => {
    try {
      const response = await fetch("http://localhost:8080/login/");
      const { auth_url } = await response.json();
      setAuthUrl(auth_url);
    } catch (error) {
      console.log();
    }
  };
  useEffect(() => {
    getAuthUrl();
  }, []);

  return (
    <Button
      variant="outline"
      color="red"
      fullWidth
      component="a"
      href={authUrl}
    >
      <Image src={GmailLogo} className="max-auto h-8 w-8 mx-1" />
      <Text className="mx-1" color="red">
        Gmail
      </Text>
    </Button>
  );
};

export default GoogleButton;

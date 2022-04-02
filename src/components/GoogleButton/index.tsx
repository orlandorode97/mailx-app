import React, { useEffect, useState } from "react";
import GmailLogo from "assets/gmail.png";
import { Button, Image, Link } from "@chakra-ui/react";
import authService from "../../services/Auth/index";

const GoogleButton: React.FC<{}> = () => {
  const [authUrl, setAuthUrl] = useState<string>("");

  const getAuthUrl = async () => {
    try {
      const { data } = await authService.getAuthUrl();
      setAuthUrl(data.auth_url);
    } catch (error) {
      console.log();
    }
  };
  useEffect(() => {
    getAuthUrl();
  }, []);

  return (
    <Link href={authUrl}>
      <Button
        variant={"outline"}
        colorScheme="red"
        leftIcon={<Image src={GmailLogo} boxSize="30px" />}
        size="md"
        isFullWidth
      >
        Google
      </Button>
    </Link>
  );
  // <Button
  //   variant="outline"
  //   color="red"
  //   fullWidth
  //   component="a"
  //   href={authUrl}
  // >
  //   <Image src={GmailLogo} className="max-auto h-8 w-8 mx-1" />
  //   <Text className="mx-1" color="red">
  //     Gmail
  //   </Text>
  // </Button>
};

export default GoogleButton;

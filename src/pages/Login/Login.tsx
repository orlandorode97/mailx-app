import React, { useContext } from "react";
import MailxLogo from "assets/logo.png";
import GoogleButton from "components/GoogleButton";
import OutlookButton from "components/OutlookButton";
import { Card, Image, Group, Grid, Text, Space } from "@mantine/core";
import { AuthContext } from "contexts/Auth/index";
import { Dialog } from "components/Dialog";

const Login: React.FC<{}> = () => {
  const { error } = useContext(AuthContext);

  return (
    <>
      <div className="h-screen flex flex-col justify-center content-center items-center bg-gray-50 space-y-4">
        <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
          <Card shadow="sm" padding="lg">
            <Card.Section>
              <Group position="center" direction="column" spacing="xs">
                <Image src={MailxLogo} className="max-auto h-60 w-60" />
                <Text weight={700} align="center">
                  Connect an email account
                </Text>
                <Space h="sm" />
              </Group>
            </Card.Section>
            <Grid.Col span={12}>
              <Group position="center" direction="column" noWrap>
                <GoogleButton />
                <OutlookButton />
              </Group>
            </Grid.Col>
          </Card>
        </div>
      </div>
      {error && <Dialog />}
    </>
  );
};

export default Login;

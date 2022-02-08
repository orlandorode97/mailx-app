import { Dialog as DialogMantine, Alert } from "@mantine/core";
import React, { useState } from "react";

export const Dialog: React.FC<{}> = () => {
  const [opened, setOpened] = useState<boolean>(true);
  const onClick = () => {
    setOpened(!opened);
  };

  return (
    <DialogMantine opened={opened} withCloseButton size="md" radius="md">
      <Alert title="Oh no :'(" withCloseButton onClose={onClick} color="red">
        Something just happened trying to log in. Try it again later.
      </Alert>
    </DialogMantine>
  );
};

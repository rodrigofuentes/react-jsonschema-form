import React from "react";

import { AddButtonProps } from "@rjsf/core";

import { Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const AddButton: React.FC<AddButtonProps> = props => (
  <Button leftIcon={<AddIcon />} {...props}>
    Add Item
  </Button>
);

export default AddButton;

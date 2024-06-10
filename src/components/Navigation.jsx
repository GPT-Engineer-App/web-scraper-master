import React from "react";
import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4}>
      <Button as={Link} to="/">
        Home
      </Button>
      <Button as={Link} to="/about-lunxun">
        About LunXun
      </Button>
    </HStack>
  );
};

export default Navigation;

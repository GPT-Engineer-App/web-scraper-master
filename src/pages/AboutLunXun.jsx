import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";

const AboutLunXun = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">为什么鲁迅要暴打周树人</Text>
        <Text>这是一个幽默的问题。鲁迅和周树人其实是同一个人，鲁迅是周树人的笔名。这个问题常常被用来调侃和幽默地讨论鲁迅的文学作品和他的思想。</Text>
      </VStack>
    </Container>
  );
};

export default AboutLunXun;

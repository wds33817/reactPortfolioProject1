import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <Avatar size='2xl' name='Dan Abrahmov' src='https://i.pravatar.cc/150?img=7'/>
    <Heading as='h2' size='md'>Hello, I am Jackson!</Heading>
    <VStack spacing={'2rem'} mt={'2rem'}>
      <Box w={'30rem'} h={'15rem'} fontSize={'3rem'} fontWeight="semibold" display="flex" justifyContent="center"  textAlign="center" >A frontend developer specialised in React</Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

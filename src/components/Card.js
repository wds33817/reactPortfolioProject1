import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Box boxSize='sm' borderRadius='8px' w="20rem" h="20rem" bg="white" >
      <Image src={imageSrc} alt={title}  borderRadius='8px' w="100%" h="68%"/>
      <Box display='flex' fontWeight={700} alignItems='baseline' fontSize="sm" color="black" p={2}>
      {title}
      </Box>  
      <Box color='gray.500' fontSize="0.6rem" pl={2} pr={2}>{description}</Box>
      <Box color="black" fontSize="0.6rem" fontWeight={400} p={2}>See more<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px", marginTop: "2px"}} size="1x"/>
</Box>
    </Box>
    
  )
};

export default Card;

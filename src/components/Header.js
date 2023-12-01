import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: wds3817@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/wds33817",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/%F0%9F%8D%BA-d-3094b5216/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/7952107/jackson",
  },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const boxRef = useRef();

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const curScrollPos = window.scrollY;
      console.log("this is curScrollPos:", curScrollPos);
      console.log("this is prevScrollPos:", prevScrollPos);
      if (prevScrollPos < curScrollPos) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setPrevScrollPos(curScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos])

  const translateY = visible ? 0 : -200;

  const transitionStyle = {
    transform: `translateY(${translateY}px)`,
    transition: "transform 0.3s ease-in-out",
  }
  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={boxRef}
      style={transitionStyle}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto" display="flex" direction="row"  justifyContent="space-between">
        <Box display="flex" direction="row" >
        {socials.map((social, index) => 
          <HStack
              key={index}
              px={2}
              py={2}
              justifyContent="space-between"
              alignItems="center"
              width="fit-content"
            >
              <nav>
                {/* Add social media links based on the `socials` data */}
                {<a href={social.url}><FontAwesomeIcon icon={social.icon} size='2x' /></a>}
              </nav>
          </HStack>
          )}
        </Box>
       
          <HStack spacing={8} textAlign="center"  fontSize='1rem' lineHeight='1rem'>
              {<a href="#Projects" onClick={handleClick("projects")}>Projects</a>/* Add links to Projects and Contact me section */}
              {<a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>}
          </HStack>
 
      </Box>
      {/* <Box color="white" maxWidth="1280px" margin="0 auto" display="flex" direction="row" alignItems="flex-end">
              <nav>
                <HStack spacing={8}>
                  {<a href="/#contact-me">Contact Me</a>/* Add links to Projects and Contact me section */}
                
       
    </Box>
  );
};
export default Header;

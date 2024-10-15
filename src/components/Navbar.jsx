import { Flex, Image, Text, IconButton, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Link = ({ to, text, isMobile }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
        fontSize: isMobile ? "20px" : "medium",
        color: isMobile ? "white" : "inherit",
        display: "block",
        padding: "0.75rem 1rem",
        textTransform: isMobile ? "uppercase" : "none",
        fontFamily: "'Lexend', sans-serif",
        fontWeight: isMobile ? "700" : "normal",
      })}>
      {text}
    </NavLink>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex alignItems={"center"} justifyContent={"space-between"} maxWidth={"100vw"} p={"1rem"} bg={"white"}>
        <Flex alignItems={"center"} width={isMobile ? "auto" : "30%"} gap={2} pl={isMobile ? "0" : "2rem"}>
          <Image src={logo} boxSize={isMobile ? "40%" : "20%"} display={isMobile ? "block" : "block"} ml={isMobile ? "1rem" : "0"} />
          {!isMobile && (
            <Text fontSize={"sm"} fontWeight={"700"}>
              BITS Goa Innovation, Incubation & Entrepreneurship Society
            </Text>
          )}
        </Flex>
        {isMobile && <IconButton aria-label="Open Menu" icon={<HamburgerIcon w={12} h={12} />} onClick={onOpen} size="lg" variant="unstyled" _focus={{ boxShadow: "none" }} color={"#f17400"} />}
        <Flex display={isMobile ? "none" : "flex"} alignItems={"center"} justifyContent={"space-between"} flex={2} fontFamily={"Roboto"} pl={"2rem"} pr={"2rem"}>
          <Link to={"/"} text={"Home"} isMobile={isMobile} />
          <Link to={"/facilities"} text={"Facilities"} isMobile={isMobile} />
          <Link to={"/incubation"} text={"Incubation"} isMobile={isMobile} />
          <Link to={"/services"} text={"Services"} isMobile={isMobile} />
          <Link to={"/cohort"} text={"Cohort"} isMobile={isMobile} />
          <Link to={"/apply"} text={"Apply"} isMobile={isMobile} />
          <Link to={"/gallery"} text={"Gallery"} isMobile={isMobile} />
          <Link to={"/about"} text={"BGIIES Till Now"} isMobile={isMobile} />
          <Link to={"/sisfs"} text={"SISFS"} isMobile={isMobile} />
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent bg={"#f17400"} width="250px" pt="4rem">
          <DrawerCloseButton variant="outline" size="lg" color="white" _hover={{ bg: "transparent", borderColor: "transparent" }} fontSize="38px" p={10} />
          <DrawerBody mt="2rem">
            <Flex direction="column" p="4">
              <Link to={"/"} text={"Home"} isMobile={isMobile} />
              <Link to={"/facilities"} text={"Facilities"} isMobile={isMobile} />
              <Link to={"/incubation"} text={"Incubation"} isMobile={isMobile} />
              <Link to={"/services"} text={"Services"} isMobile={isMobile} />
              <Link to={"/cohort"} text={"Cohort"} isMobile={isMobile} />
              <Link to={"/apply"} text={"Apply"} isMobile={isMobile} />
              <Link to={"/gallery"} text={"Gallery"} isMobile={isMobile} />
              <Link to={"/about"} text={"BGIIES Till Now"} isMobile={isMobile} />
              <Link to={"/sisfs"} text={"SISFS"} isMobile={isMobile} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

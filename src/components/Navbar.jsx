import { Flex, Image, Text, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Link = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        textDecoration: isActive ? "underline" : "none",
        fontSize: "medium",
        display: "block",
        padding: "0.5rem 1rem",
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
        {isMobile && (
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            size="lg"
            variant="unstyled" // Removes background
            _focus={{ boxShadow: "none" }} // Removes focus outline
          />
        )}
        <Flex display={isMobile ? "none" : "flex"} alignItems={"center"} justifyContent={"space-between"} flex={2} fontFamily={"Roboto"} pl={"2rem"} pr={"2rem"}>
          <Link to={"/"} text={"Home"} />
          <Link to={"/facilities"} text={"Facilities"} />
          <Link to={"/incubation"} text={"Incubation"} />
          <Link to={"/services"} text={"Services"} />
          <Link to={"/cohort"} text={"Cohort"} />
          <Link to={"/apply"} text={"Apply"} />
          <Link to={"/gallery"} text={"Gallery"} />
          <Link to={"/about"} text={"BGIIES Till Now"} />
          <Link to={"/sisfs"} text={"SISFS"} />
        </Flex>
      </Flex>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="md" // Base size
      >
        <DrawerOverlay />
        <DrawerContent width="250px">
          {" "}
          {/* Custom width */}
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" p="4">
              <Link to={"/"} text={"Home"} />
              <Link to={"/facilities"} text={"Facilities"} />
              <Link to={"/incubation"} text={"Incubation"} />
              <Link to={"/services"} text={"Services"} />
              <Link to={"/cohort"} text={"Cohort"} />
              <Link to={"/apply"} text={"Apply"} />
              <Link to={"/gallery"} text={"Gallery"} />
              <Link to={"/about"} text={"BGIIES Till Now"} />
              <Link to={"/sisfs"} text={"SISFS"} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;

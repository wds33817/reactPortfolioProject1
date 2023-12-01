import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success";

  console.log({isOpen, type, message, onClose});
  // console.log("isOpen:", isOpen);
  // console.log("type:", type);
  console.log("message:", message);               

  const getHeadingAndColor = () => {
    switch (type.type) {
      case "success":
        return {heading: "All good!", color: "#81C784"};
      case "error":
      default: 
        return {heading: "Oops!", color: "#FF8A65"};
    }
  };
  const {heading, color} = getHeadingAndColor();
  // console.log("heading:", heading);
  // console.log("color:", color);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={color}>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {heading}
          </AlertDialogHeader>
          <AlertDialogBody>{type.message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;

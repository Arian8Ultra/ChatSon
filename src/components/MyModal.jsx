// Description: This is a modal component that can be used to display any content in a modal window with a glass effect and a close button
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ChakraProvider,
  Center,
} from "@chakra-ui/react";

import React from "react";
import { primary } from "../../theme/Colors";

export default function MyModal({
  width,
  height,
  header,
  content,
  footer,
  isOpen,
  onClose,
  bgColor,
  bgGradient,
  color,children,
  ...rest
}) {
  return (
      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior={"outside"} size={"3xl"} isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor={bgGradient == null ? bgColor : "black"}
          bgGradient={bgGradient}
          borderRadius={20}
          height={height != null ? height : "60vmin"}
        >
          <ModalHeader
            bgColor={bgGradient == null ? bgColor : "black"}
            borderTopRadius={20}
            borderTopColor={primary}
            {...rest}
          >
            {header}
          </ModalHeader>
          <ModalCloseButton color={color} />
          <ModalBody bgColor={bgGradient == null ? bgColor : "black"}>{content}{children}</ModalBody>
          <ModalFooter
            bgColor={bgGradient == null ? bgColor : "transparent"}
            borderBottomRadius={20}
          >
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
}

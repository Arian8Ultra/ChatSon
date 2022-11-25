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
  color,
  ...rest
}) {
  return (
      <Modal onClose={onClose} isOpen={isOpen} scrollBehavior={"outside"} size={"4xl"} isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor={bgGradient == null ? bgColor : "black"}
          bgGradient={bgGradient}
          borderRadius={10}
          height={height != null ? height : "60vmin"}
        >
          <ModalHeader
            bgColor={bgGradient == null ? bgColor : "black"}
            borderTopRadius={10}
            borderTopColor={primary}
            borderTopWidth={4}
            {...rest}
          >
            {header}
          </ModalHeader>
          <ModalCloseButton color={color} />
          <ModalBody bgColor={bgGradient == null ? bgColor : "black"}>{content}</ModalBody>
          <ModalFooter
            bgColor={bgGradient == null ? bgColor : "transparent"}
            borderBottomRadius={10}
          >
            {footer}
          </ModalFooter>
        </ModalContent>
      </Modal>
  );
}

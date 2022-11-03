import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React from "react";

export default function MyModal({ width, height, header, content, footer, isOpen, onClose,bgColor,bgGradient, ...rest }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} scrollBehavior={"outside"} size={'2xl'}>
      <ModalOverlay />
      <ModalContent bgColor={bgGradient== null ? bgColor : 'transparent'} bgGradient={bgGradient}  borderRadius={8}>
        <ModalHeader  bgColor={bgGradient== null ? bgColor : 'transparent' } borderTopRadius={7} borderTopColor={'red'} borderTopWidth={4} {...rest} >{header}</ModalHeader>
        <ModalCloseButton color={'white'}/>
        <ModalBody bgColor={bgGradient== null ? bgColor : 'transparent'} >{content}</ModalBody>
        <ModalFooter bgColor={bgGradient== null ? bgColor : 'transparent'} borderBottomRadius={7}>
          {footer}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

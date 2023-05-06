import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ModalContent from "../Modal";

const ModalPage = ({ show, onClose, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const showModal = show ? (
    <ModalContent onClose={onClose} title={title} />
  ) : null;

  return isBrowser
    ? createPortal(showModal, document.getElementById("modal"))
    : null;
};

export default ModalPage;

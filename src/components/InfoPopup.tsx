import { motion } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function InfoPopup() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        style={{ backgroundColor: "transparent" }}
      >
        Info
      </button>
      {showModal &&
        createPortal(
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="modal"
            >
              <h1>Feelings Finder</h1>
              <p>
                How are you feeling today? Sometimes, it is difficult to know
                exactly what emotion you are experiencing. Understanding how you
                are feeling is vital to emotional maturity and changing unwanted
                feelings into more positive ones. With Feelings Finder you can
                pinpoint your exact emotions. Feelings Finder can also be used
                as a grounding tool to help activate your 'wise-mind'.
              </p>
              <p>
                "Extended" version based on the Feelings Wheel by{" "}
                <a href="http://imgur.com/tCWChf6">Geoffrey Roberts</a>
              </p>
              <p>
                "Original" version based on the Feelings Wheel by{" "}
                <a href="https://www.pspnet.ca/assets/the-gottman-institute-the-feeling-wheel-v2.pdf">
                  Dr. Gloria Wilcox
                </a>
              </p>
              <button onClick={() => setShowModal(false)}>Close</button>
            </motion.div>
          </>,
          document.body
        )}
    </>
  );
}

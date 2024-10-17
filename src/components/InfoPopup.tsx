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
            <div
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                backgroundColor: "rgb(36, 36, 36, 0.5)",
              }}
            ></div>
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
                as a grounding tool to help activate your{" "}
                <a
                  href="https://www.therapistaid.com/worksheets/wise-mind"
                  target="_blank"
                >
                  "wise mind"
                </a>
                .
              </p>
              <p>
                "Extended" version based on the Feelings Wheel by{" "}
                <a
                  href="https://imgur.com/a/emotion-wheel-CkxQC"
                  target="_blank"
                >
                  Geoffrey Roberts
                </a>
              </p>
              <p>
                "Original" version based on the Feelings Wheel by{" "}
                <a
                  href="https://www.pspnet.ca/assets/the-gottman-institute-the-feeling-wheel-v2.pdf"
                  target="_blank"
                >
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

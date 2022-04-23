import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import posed from "react-pose";

export default function({ isOpen, toggle, children }) {
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));

  return (
    <ModalBackground initialPose="closed" pose={isOpen ? "open" : "closed"}>
      <Modal ref={ref}>{children}</Modal>
    </ModalBackground>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler, ref]);
}

const modalBackgroundPoses = {
  open: {
    background: "rgba(0, 0, 0, 0.2)",
    applyAtStart: {
      display: "block"
    }
  },
  closed: {
    background: "rgba(0, 0, 0, 0)",
    applyAtEnd: {
      display: "none"
    }
  }
};

const ModalBackground = styled(posed.div(modalBackgroundPoses))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const modalPoses = {
  open: {
    opacity: 1,
    transition: {
      opacity: {
        type: "tween",
        duration: 200
      }
    }
  },
  closed: {
    opacity: 0,
    transition: {
      opacity: {
        type: "tween",
        duration: 200
      }
    }
  }
};

const Modal = styled(posed.div(modalPoses))`
  position: fixed;
  background: #F3F3F3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 75vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
`;


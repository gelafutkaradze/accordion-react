import React, { useState } from "react";

export const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="title">
        <p>{title}</p>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {!isOpen ? (
            <i class="fa-solid fa-angle-down"></i>
          ) : (
            <i class="fa-solid fa-angle-up"></i>
          )}
        </button>
      </div>
      {isOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "10",
          }}
        >
          <p style={{ color: "#787887" }}>{description}</p>
        </div>
      )}
    </div>
  );
};

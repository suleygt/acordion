import { useState } from "react"

import React from 'react'

const FaqElement =  ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="faq-element">
      <span className="id">{`Soru ${id}:`}</span>
      <div className="question">
        {question} 
      <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '-' : '+'}
      </button>
      </div>
      {isOpen && (
        <div className="answer-box">
          <p className="answer">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqElement;
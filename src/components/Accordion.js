import { useState } from "react";
import "./Accordion.css"; 

const faqs = [
  { question: "Question 1", answer: "Answer to question 1" },
  { question: "Question 2", answer: "Answer to question 2" },
  { question: "Question 3", answer: "Answer to question 3" },
  { question: "Question 4", answer: "Answer to question 4" },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-item" onClick={() => toggleAccordion(index)}>
          <div className="question">
          <div>{faq.question}</div>
            <div className="dot"></div>
            <div className="line"></div>
            <div className="dot"></div>
          </div>
          <div className={`answer ${openIndex === index ? "open" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
}

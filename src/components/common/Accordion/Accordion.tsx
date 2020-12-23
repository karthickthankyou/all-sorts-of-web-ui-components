import React, { ReactNode } from 'react';
export interface IAccordionProps {
  id: string;
  title: string | ReactNode;
  content: string | ReactNode;
}


const Accordion = ({ id, title, content }: IAccordionProps) => {

  return (
    <div className="accordion">
      <input type="checkbox" name="accordion-input" id={id} />
      <label htmlFor={id} className="p-3 d-block hover-bg-primary-100 relative">
        {title}
      </label>
      <div className="accordion-content p-3">
        {content}
      </div>
    </div>
  )
};

export default Accordion;

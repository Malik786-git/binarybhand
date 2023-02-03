import React, { useState } from "react";

const Question = ({data}) => {
    const [openFAQ, setOpenFAQ] = useState(false);


  return (
    <div className="faq-box">
      <div className="Question" onClick={()=> setOpenFAQ(!openFAQ)}>
        <p>
        {data?.question}
        </p>
        <span>&nbsp; <i className={openFAQ? "fa fa-chevron-right rotate": "fa fa-chevron-right"} aria-hidden="true"></i></span>
      </div>
      <div className={openFAQ? "Answer-show" : "Answer"} >
       {data?.answer}
      </div>
    </div>
  );
};


export default Question;

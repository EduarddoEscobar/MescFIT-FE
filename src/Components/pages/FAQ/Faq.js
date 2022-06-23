import React, { useState, useEffect } from 'react';
import FaqItem from './FaqItem';

import data from '../../../data/FAQ';

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    document.title = 'FAQ/Pricing';
    setFaqs(data);
  }, []);

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.length > 0 && <FaqItem faq={faqs[0]} />}
    </div>
  );
};

export default Faq;

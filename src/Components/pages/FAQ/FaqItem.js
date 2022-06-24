import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';

const FaqItem = ({ faq }) => {
  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  return (
    <div
      className="faq-item"
      onClick={handleClick}
      style={{
        border: hidden ? 'none' : '1px solid #00bbe3',
      }}
    >
      <div className="question-text">
        <h2>{faq.question}</h2>
        {hidden ? (
          <DownOutlined className="arrow-icon down-arrow" />
        ) : (
          <UpOutlined className="arrow-icon up-arrow" />
        )}
      </div>

      <div
        className="answer-text"
        style={{
          maxHeight: hidden ? '0' : '25vh',
        }}
      >
        <div>
          {faq.answer.map((ans, ind) => (
            <p key={ind}>{ans}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqItem;

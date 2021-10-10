import React, { useState } from 'react';
import Stepper from 'components/stepper/Stepper';

const Quiz = () => {
  const Question = ({ ques, options, value }) => {
    const [answer, setAnswer] = useState('');
    return (
      <div className="white-container">
        <div>
          <div className="question">
            <p className="ps-4">{value}</p>
            <p>{ques}</p>
          </div>
          {options.map((item) => (
            <div className="pretty-radio">
              <input
                type="radio"
                className="radio"
                checked={answer === item}
                value={item}
                onChange={(e) => setAnswer(e.target.value)}
                name={`radio-${value}`}
              />
              <span className="radio-look" />
              <span className="choice">{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Question
        ques=" A hash table of length 10 uses open addressing with hash function
            h(k)=k mod 10, and linear probing. After inserting 6 values into an
            empty hash table, the table is as shown below."
        options={['Null', 'Void', 'Undefined', 'None of these']}
        value={1}
      />
      <Question
        ques=" A hash table of length 10 uses open addressing with hash function
            h(k)=k mod 10, and linear probing. After inserting 6 values into an
            empty hash table, the table is as shown below."
        options={['Null', 'Void', 'Undefined', 'None of these']}
        value={2}
      />
      <Question
        ques=" A hash table of length 10 uses open addressing with hash function
            h(k)=k mod 10, and linear probing. After inserting 6 values into an
            empty hash table, the table is as shown below."
        options={['Null', 'Void', 'Undefined', 'None of these']}
        value={3}
      />
      <Question
        ques=" A hash table of length 10 uses open addressing with hash function
            h(k)=k mod 10, and linear probing. After inserting 6 values into an
            empty hash table, the table is as shown below."
        options={['Null', 'Void', 'Undefined', 'None of these']}
        value={4}
      />
      <div className="btn-section">
        <button type="submit" className="btn-next">
          Take a Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;

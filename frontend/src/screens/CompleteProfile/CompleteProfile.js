import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'antd';
import { useHistory } from 'react-router';
const { Option } = Select;

const CompleteProfile = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [UG, setUG] = useState('');
  const [yearOfCompletion, setYearOfCompletion] = useState('');
  const [selectedTechs, setSelectedTechs] = useState([]);

  const children = [
    'c++',
    'c',
    'java',
    'javascript',
    'aws',
    'python',
    'c#',
    'R',
    'ruby'
  ];

  function handleChange(value) {
    console.log(`selected ${value}`);
    setSelectedTechs(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/quiz');
  };
  return (
    <main className="complete-profile">
      {/* <div> */}
      <div className="white-container">
        <form className="form" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Personal Details :</legend>{' '}
            <div className="inputs">
              <div className="flex-col">
                <label htmlFor="">
                  FirstName <span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter FirstName"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="">MiddleName</label>
                <input
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  placeholder="Enter MiddleName"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="">
                  LastName<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  placeholder="Enter LastName"
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Address Details :</legend>{' '}
            <div className="inputs">
              <div className="flex-col">
                <label htmlFor="">
                  Street<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  placeholder="Enter Street"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="">
                  City<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                  value={city}
                  placeholder="Enter City"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="">
                  State<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter State"
                />
              </div>
            </div>
            <div className="inputs">
              <div className="flex-col">
                <label htmlFor="">
                  Country<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter Country"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="">
                  Pincode<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter Pincode"
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Professional Details :</legend>{' '}
            <div className="inputs">
              <div className="flex-col">
                <label htmlFor="">
                  Technologies Know<span className="required"> *</span>
                </label>
                <Select
                  mode="multiple"
                  style={{ width: '100%' }}
                  placeholder="select Technology"
                  onChange={handleChange}
                  optionLabelProp="label"
                  size="large"
                  required
                >
                  {children.map((item) => (
                    <Option key={item}>{item}</Option>
                  ))}
                </Select>
              </div>
              <div className="flex-col">
                <label htmlFor="">
                  Under Graduate<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setUG(e.target.value)}
                  value={UG}
                  placeholder="Enter Your Degree"
                />
              </div>
              <div className="flex-col">
                <label htmlFor="">
                  Year of Completion<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  value={yearOfCompletion}
                  onChange={(e) => setYearOfCompletion(e.target.value)}
                  placeholder="Enter Year of Completion"
                />
              </div>
            </div>
            <div className="inputs">
              <div className="flex-col">
                <label htmlFor="">
                  College Name<span className="required"> *</span>
                </label>
                <input
                  required
                  type="text"
                  onChange={(e) => setCollegeName(e.target.value)}
                  value={collegeName}
                  placeholder="Enter Your College name"
                />
              </div>
            </div>
          </fieldset>
          <div className="btn-section">
            <button type="submit" className="btn-next">
              Take a Quiz
            </button>
          </div>
        </form>
      </div>
      {/* </div> */}
    </main>
  );
};

export default CompleteProfile;

import React, { useState } from 'react';
import './App.css';
import Container from './components/containers/Container';
import Button from './components/buttons/Buttons';
import TextInput from './components/inputs/TextInput';
import DropDown from './components/inputs/DropDown';
import HalfDropDown from './components/inputs/HalfDropDown';
import NavBar from './components/nav/NavBar';

function CaseForm() {

  const [useTitle, setTitle] = useState('');
  const [useEmployee, setEmployee] = useState('');
  const [useConcerningEmployee, setConcerningEmployee] = useState('');
  const [useCaseType, setCaseType] = useState('');
  const [useStatus, setStatus] = useState('');
  const [usePriority, setPriority] = useState('');
  const [useSeverity, setSeverity] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Form ${useTitle}`);
  }

  return (
    <div className="mainContainer">
        <NavBar></NavBar>
      <h1>Create Case</h1>
      <Container primary className="windowView">
        <Container small short>
          <ul className="floatContainer">
            <li>
              <Button primary>Create</Button>
            </li>
            <li>Previous Cases Employee</li>
            <li>Previous Cases Concerning Employee</li>
          </ul>
        </Container>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="block">
              <label className="form-input">Title</label>
              <TextInput bar type='text' title='Title' required placeholder='Title' name='title' value={useTitle} 
                onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="block">
              <label className="form-input">Employee</label>
              <DropDown bar type='dropdown' title='Employee' required placeholder='Find an employee' name='employee' value={useEmployee}
                options={['Jack', 'Mike', 'Suzy', 'Steve', 'Nicole']}
                onChange={e => setEmployee(e.target.value)} />
            </div>
            <div className="block">
              <label className="form-input">Concerning Employee</label>
              <DropDown bar type='dropdown' title='Concerning Employee' placeholder='Find an employee' name='concerningEmployee' value={useConcerningEmployee}
                options={['Jack', 'Mike', 'Suzy', 'Steve', 'Nicole']}
                onChange={e => setConcerningEmployee(e.target.value)} />
            </div>
        <div className="floatContainer">
          <div className="floatLeft">
            <div className="halfBlock">
              <label className="form-input">Case Type</label>
              <HalfDropDown type='dropdown' title='Case Type' required placeholder='Please Select' name='caseType' value={useCaseType}
                options={['General HR', 'Benefits', 'Compensation', 'Employee Relations', 'HRIS', 'Payroll']}
                onChange={e => setCaseType(e.target.value)} />
            </div>
            <div className="halfBlock">
              <label className="form-input">Status</label>
              <HalfDropDown type='dropdown' title='Status' placeholder='Medium' name='status' value={useStatus}
                options={['Open', 'On Hold', 'Waiting', 'Resolved']}
                onChange={e => setStatus(e.target.value)} />
            </div>
            <div className="halfBlock">
              <label className="form-input">Priority</label>
              <HalfDropDown type='dropdown' title='Priority' placeholder='Medium' name='priority' value={usePriority}
                options={['Urgent', 'High', 'Med', 'Low']}
                onChange={e => setPriority(e.target.value)} />
            </div>
            <div className="halfBlock">
              <label className="form-input">Severity</label>
              <HalfDropDown type='dropdown' title='Severity' placeholder='Medium' name='severity' value={useSeverity}
                options={['Urgent', 'High', 'Med', 'Low']}
                onChange={e => setSeverity(e.target.value)} />
            </div>
            <div className="halfBlock">
              <Button type="button">
                <input type="checkbox" value="Sensitive"></input>
                Sensitive
              </Button>
              <Button type="button">
                <input type="checkbox" value="Available in Portal"></input>
                Available in Portal
              </Button>
            </div>
          </div>
          <div className="floatRight">
            <div className="halfArea">
              <textarea className="textArea" placeholder="Additional Notes."></textarea>
            </div>
          </div>
        </div>
            <div className="submitButtons">
              <Button primary type="submit" >Create and Close</Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default CaseForm;

import React, { useState } from 'react';
import './App.css';
import Container from './components/containers/Container';
import Button from './components/buttons/Buttons';
import TextInput from './components/inputs/TextInput';
import DropDown from './components/inputs/DropDown';
import HalfDropDown from './components/inputs/HalfDropDown';

function CreateAsset() {

  const [useName, setName] = useState('');
  const [useIdentifier, setIdentifier] = useState('');
  const [useAssetType, setAssetType] = useState('');
  const [useEmployee, setEmployee] = useState('');
  const [useStatus, setStatus] = useState('');
  const [useSerialNumber, setSerielNumber] = useState('');
  const [useExpires, setExpires] = useState('');
  const [useDescription, setDescription] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Form ${useName}`);
  }

  return (
    <div className="mainContainer">
      <h1 className="header">Create New Asset</h1>
      <Container primary className="windowView">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="block">
              <label className="form-input required">Name</label>
              <TextInput bar type='text' title='Name' required placeholder='Asset Name' name='name' value={useName} 
                onChange={e => setName(e.target.value)} />
            </div>
            <div className="block">
              <label className="form-input">Identifier</label>
              <TextInput bar type='text' title='Identifier' placeholder='Leave field blank for an auto-generated identifier.' name='identifier' value={useIdentifier}
                onChange={e => setIdentifier(e.target.value)} />
            </div>
            <div className="block">
              <label className="form-input required">Asset Type</label>
              <DropDown bar type='dropdown' title='Asset Type' placeholder='Find an employee' name='assetType' value={useAssetType}
                options={['Capability', 'Physical Asset', 'Disciplinary Action', 'Soft Asset', 'Immigration Status']}
                onChange={e => setAssetType(e.target.value)} />
            </div>
        <div className="floatContainer">
          <div className="floatLeft">
            <div className="halfBlock">
              <label className="form-input required">Employee</label>
              <HalfDropDown type='dropdown' title='Employee' required placeholder='Please Select' name='employee' value={useEmployee}
                options={['Jack', 'Mike', 'Suzy', 'Steve', 'Nicole']}
                onChange={e => setEmployee(e.target.value)} />
            </div>
            <div className="halfBlock">
              <label className="form-input required">Status</label>
              <HalfDropDown type='dropdown' title='Status' placeholder='Medium' name='status' value={useStatus}
                options={['Active', 'Retired']}
                onChange={e => setStatus(e.target.value)} />
            </div>
            <div className="halfBlock">
              <label className="form-input required">Serial Num.</label>
              <TextInput type='text' title='Serial Number' placeholder='' name='priority' value={useSerialNumber}
                onChange={e => setSerielNumber(e.target.value)} />
            </div>
            <div className="halfBlock">
              <label className="form-input">Expires</label>
              <TextInput type='date' title='Expires' placeholder='mm/dd/yyyy' name='expires' value={useExpires}
                onChange={e => setExpires(e.target.value)} />
            </div>
          </div>
          <div className="floatRight">
            <div className="halfArea">
              <textarea className="textArea" placeholder="Description of Asset." value={useDescription}
                onChange={e => setDescription(e.target.value)}>
              </textarea>
            </div>
          </div>
        </div>
            <div className="">
              <Button bar type="submit">Create Asset</Button>
              <br></br>
              <Button bar primary type="submit">Cancel</Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default CreateAsset;
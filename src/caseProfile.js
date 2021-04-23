import React, { useState } from 'react';
import './App.css';
import Card from './components/containers/Card';
import Button from './components/buttons/Buttons';

function CaseProfile() {
  return (
      <div className="mainContainer floatContainer">
          <div className="col-left">
            <Card primary small>
                Case is...
                <br></br>
                <Button type="button">
                    <input type="checkbox" value="Sensitive"></input>
                        Sensitive
                </Button>
                <Button type="button">
                    <input type="checkbox" value="Available in Portal"></input>
                        Available in Portal
                </Button>
            </Card>
            <Card primary small>
                Employee
                
            </Card>
          </div>
          <div className="col-mid">
            <Card primary small>
                Case is
            </Card>
            <Card primary small>
                Case is
            </Card>
          </div>
          <div className="col-right">
            <Card primary small>
                Case is
            </Card>
          </div>
      </div>
  );
}

export default CaseProfile;

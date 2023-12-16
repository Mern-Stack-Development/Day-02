import React from 'react';
import styled from 'styled-components';
import ThemeProvider from './ThemeProvider';

const Button = styled.button`
  background-color: ${props => props.primary ? 'purple' : 'pink'};
  color: ${props => props.primary ? 'green' : 'red'};
  border-color: ${props => props.primary ? 'blue' : 'yellow'};
  margin: 50px 50px 50px 50px; 
`;

const Alert = styled.div`
  background-color: ${props => props.success ? 'green' : 'red'};
  color: white;
  margin: 50px 50px 50px 50px; 
`;

const Heading = styled.h1`
  font-size: 24px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;



function DynamicStyling() {
  return (
    <div>
        <div>
            <Button primary>Primary Button</Button>
            <Button>Secondary Button</Button>
        </div>
        <div>
            <Alert success>Success Alert</Alert>
            <Alert>Error Alert</Alert>
        </div>   
        <div>
            <Heading>This is the Heading 1</Heading>
        </div> 
    </div>

  );
}
export default DynamicStyling;





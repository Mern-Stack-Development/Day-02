import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: cyan;
  border: 1px solid #ccc;
  padding: 16px;
  margin: 50px 50px 50px 50px;
  color: Yellow;
`;

const RoundedCard = styled(Card)`
  border-radius: 20px;
  color: red;
`;

function Nesting() {
    return (
        <div>
          <Card>
            <p>This is a regular card.</p>
          </Card>
    
          <RoundedCard>
            <p>This is a rounded card.</p>
          </RoundedCard>
        </div>
      );
}

export default Nesting;

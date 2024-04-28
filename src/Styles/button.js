import styled from 'styled-components';

export const Button = styled.button`
background-color: yellow;
color: black;
padding: 10px 20px;
border: 2px solid transparent; /* Added transparent border to maintain button size */
border-radius: 4px;
cursor: pointer;
margin: 50px;

&:hover {
  background-color: blue; /* Change background color on hover */
  border-color: red; /* Change border color on hover */
}
`;
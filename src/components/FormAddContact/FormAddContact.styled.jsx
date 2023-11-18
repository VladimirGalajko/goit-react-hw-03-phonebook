import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column; 
  max-width: 150px;
  align-items: center;
  margin: 0 auto;

`;

export const Input = styled.input`
 padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #999; 
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); 
  }
`

export const Button = styled.button`
    background-color: rgb(78, 185, 119);
    color: rgb(255, 255, 255);
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    box-shadow: rgb(255, 255, 255) -1px -1px 1px, rgb(186, 190, 204) 1px 1px 1px;
    cursor: pointer;
    transition: filter 0.3s ease 0s;
    &:hover {
    filter: brightness(80%);
  }
  &:active {
    transform: scale(0.9);
  }
`
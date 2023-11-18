import styled from 'styled-components';
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
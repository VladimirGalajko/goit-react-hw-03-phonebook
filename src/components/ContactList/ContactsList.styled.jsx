import styled from 'styled-components';
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;

  &:last-child {
    margin-bottom: 0;
  }

`;
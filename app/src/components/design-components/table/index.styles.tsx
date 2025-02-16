import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 24px 0;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHead = styled.thead`
  background-color: #6c5ce7;
  color: #ffffff;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }

  &:hover {
    background-color: #ece9f1;
  }
`;

const TableCell = styled.td`
  padding: 12px 16px;
  text-align: left;
  font-size: 14px;
  color: #333;
`;

const TableHeader = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
`;

export { Table, TableHead, TableRow, TableCell, TableHeader };

import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableHeader,
} from "./index.styles";

type Column<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
};
const CommonTable = <T,>({ data, columns }: TableProps<T>) => {
  return (
    <Table>
      <TableHead>
        <tr>
          {columns.map((column, colIndex) => (
            <TableHeader key={`${column.key as string}-${colIndex}`}>
              {column.label}
            </TableHeader>
          ))}
        </tr>
      </TableHead>
      <tbody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={`${col.key as string}-${colIndex}`}>
                {col.render
                  ? col.render(row[col.key], row)
                  : (row[col.key] as React.ReactNode)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default CommonTable;

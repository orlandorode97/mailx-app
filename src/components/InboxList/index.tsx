import React from "react";
import { Checkbox } from "@mantine/core";
import { useTable, usePagination, Row } from "react-table";
import { parseHotkey } from "@mantine/hooks/lib/use-hotkey/parse-hotkey";

const InboxList: React.FC<{}> = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
      },
      {
        col1: "Hello",
      },
      {
        col1: "Hello",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, prepareRow, rows } = useTable<{}>(
    {
      columns,
      data,
    },
    usePagination
  );

  return (
    <div className="overflow-y-auto h-screen scroll-smooth">
      <table
        className="min-w-full divide-y divide-gray-200 relative w-full bg-white"
        {...getTableProps()}
      >
        <tbody {...getTableBodyProps()}>
          {rows.map((row: Row<{}>, index: number) => {
            prepareRow(row);
            return row.cells.map((cell) => {
              return (
                <tr className="text-gray-700" {...cell.getCellProps()}>
                  <td className="border-b-2 pl-3 dark:border-dark-5">1</td>
                  <td className="border-b-2 pl-3 dark:border-dark-5">
                    Jean Marc
                  </td>
                  <td className="border-b-2 pl-3 dark:border-dark-5">Louis</td>
                  <td className="border-b-2 pl-3 dark:border-dark-5">Jl987</td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InboxList;

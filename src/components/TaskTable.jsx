import DATA from "../data"
import {createColumnHelper,flexRender,getCoreRowModel,useReactTable,} from "@tanstack/react-table";
import { useState } from "react";
import EditableCell from "./EditableCell";
import statusCell from "./statusCell";
import DateCell from "./DateCell";

const columnHelper = createColumnHelper()


const columns = [
  columnHelper.accessor((row) => row.task, {
    id: "task",
    cell: EditableCell,
    header: () => <span>Task</span>,
    enableResizing: true,
  }),
  columnHelper.accessor((row) => row.status, {
    id: "status",
    cell: statusCell,
    header: () => <span>Status</span>,
    enableResizing: true,
  }),
  columnHelper.accessor((row) => row.due, {
    id: "due",
    cell: DateCell,
    header: () => <span>Due</span>,
    enableResizing: true,
  }),
  columnHelper.accessor((row) => row.notes, {
    id: "notes",
    cell: EditableCell,
    header: () => <span>Notes</span>,
    enableResizing: true,
  }),
];

export default function TaskTable() {

    const [data, setData] = useState(DATA);
    console.log(data)

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: "onChange",
      meta:{
        updateData: (rowIndex, colomnId, value) => setData(
            prev => prev.map(
                (row,index) =>
                    index === rowIndex ? {
                        ...prev[rowIndex],
                        [colomnId]: value,
                    }: row
            )
        )
      }
    });
    console.log(table.getHeaderGroups)
    return (
      <div className="p-2 border border-gray-400 h-200 overflow-auto ">
        <table className="border border-gray-400 border-collapse">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize() }}
                    className="relative border border-gray-400 bg-gray-100 px-4 py-2 text-left font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {header.column.getCanResize() && (
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="absolute right-0 top-0 h-full w-1 cursor-col-resize select-none bg-gray-300 hover:bg-gray-500"
                      />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className=" border border-gray-400 px-4 py-2"
                    key={cell.id}
                    width={cell.column.getSize()}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="h-4" />
      </div>
    );
}
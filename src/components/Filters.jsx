export default function Filters({ table }) {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={table.getColumn("task")?.getFilterValue() ?? ""}
        onChange={(e) =>
          table.getColumn("task")?.setFilterValue(e.target.value)
        }
        className="border px-2 py-1 rounded"
      />
    </div>
  );
}

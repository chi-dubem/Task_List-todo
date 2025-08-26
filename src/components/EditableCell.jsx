import { useEffect, useState } from 'react'

const EditableCell = ({getValue, row, column, table}) => {
    const initialValue = getValue
    const [value, setValue] = useState(initialValue)

    const onBlur = () => {
        table.options.meta?.updateData(row.index, column.id, value);
    }

    useEffect(() => {
        setValue(initialValue)
    },[initialValue])

  return <input
   className="w-85% overflow-hidden text-over truncate whitespace-nowrap" 
   value={value}
   onBlur={onBlur}
   type='text'
   onChange={
    e => setValue(e.target.value)
   }
   />;
}

export default EditableCell
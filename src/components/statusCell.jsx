import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { STATUSES } from "../data";

// const ColorIcon = ({color, ...props}) => (
//   <div className="w-5 h-5 border rounded m" style={{background: {color}}} {...props}/>
// )
const ColorIcon = ({ color, ...props }) => (
  <div
    className="w-5 h-5 border rounded mr-2"
    style={{ backgroundColor: color }}
    {...props}
  />
);

function StatusCell({ getValue, row, column, table }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { name, color } = getValue() || {};
  const { updateData } = table.options.meta;
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (status) => {
    updateData(row.index, column.id, status);
    handleClose();
  };

  return (
    <div style={{ backgroundColor: color || "transparent", width: "100%" }}>
      <div
        onClick={handleClick}
        style={{
          width: "100%",
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        {name || "Select Status"}
      </div>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => handleSelect(null)}>
          <ColorIcon color="red" />
          None
        </MenuItem>
        {STATUSES.map((status) => (
          <MenuItem key={status.id} onClick={() => handleSelect(status)}>
            <ColorIcon color={status.color} />
            {status.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default StatusCell;

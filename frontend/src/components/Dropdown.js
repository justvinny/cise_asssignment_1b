import { InputLabel, FormControl, MenuItem, Select } from "@mui/material";

const Dropdown = ({ menuItems, selected, setSelected, isLoading }) => {
    /**
     * Handle dropdown value selection change.
     * @param {*} event
     */
    const handleChange = (event) => {
        setSelected(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="dropdown-selector-label">SE Practice</InputLabel>
            <Select
                labelId="dropdown-selector-label"
                id="dropdown-selector"
                data-testid="dropdown-selector"
                label="SE Practice"
                value={selected}
                onChange={handleChange}
                disabled={isLoading}
            >
                {menuItems.map((menuItem, index) => (
                    <MenuItem key={`${menuItem}-${index}`} value={menuItem}>
                        {menuItem}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Dropdown;

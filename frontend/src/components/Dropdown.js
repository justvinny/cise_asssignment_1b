import { InputLabel, FormControl, MenuItem, Select } from "@mui/material";

const Dropdown = ({
    menuItems,
    selectedPractice,
    setSelectedPractice,
    isLoading,
}) => {
    /**
     * Handle dropdown value selection change.
     * @param {*} event 
     */
    const handleChange = (event) => {
        setSelectedPractice(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="se-practice-selector-label">SE Practice</InputLabel>
            <Select
                labelId="se-practice-selector-label"
                id="se-practice-selector"
                label="SE Practice"
                value={selectedPractice}
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

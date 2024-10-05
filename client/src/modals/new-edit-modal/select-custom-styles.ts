const customSelectStyles = {
    singleValue: (provided: any, state: any) => ({
        ...provided,
        color: '#9ca8b4', // Change the text color of the selected value
        fontSize: 14
    }),
    dropdownIndicator: (provided: any, state: any) => ({
        ...provided,
        color: '#9ca8b4', // Change the color of the arrow
    }),
    control: (base: any, state: any) => ({
        ...base,
        width: '97%',
        borderColor: state.isFocused ? 'lightgray' : 'lightgray', // Customize focus color
        boxShadow: state.isFocused ? '0 0 0 1px lightgray' : 'none', // Customize focus shadow
        '&:hover': {
            borderColor: 'lightgray', // No border change on hover
            boxShadow: 'none' // No shadow change on hover
        }
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#f1f3f5' : 'white',
        color: '#9ca8b4',
        fontSize: 14,
        padding: 10,
        cursor: 'pointer',
        ':hover': {
            backgroundColor: 'lightgray',
        }
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: 'lightgray', // Change the placeholder color
        fontSize: 14, // Change the placeholder font size
        // Add more styles as needed
    }),
};

export default (customSelectStyles);
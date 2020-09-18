import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

const ThemeDatePicker = () => {
    const [value, onChange] = useState(new Date());
    return (
        <DatePicker
            onChange={onChange}
            value={value}
        />
    );
};

export default ThemeDatePicker;
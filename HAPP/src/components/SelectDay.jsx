import React from 'react';

const SelectDay = ({value, onChange}) => {

  return (
    <label id="dayLabel">
      Choose a day :
      <select id="daySelector" value={value} onChange={onChange} >
        <option value='0'>Sunday</option>
        <option value='1'>Monday</option>
        <option value='2'>Tuesday</option>
        <option value='3'>Wednesday</option>
        <option value='4'>Thursday</option>
        <option value='5'>Friday</option>
        <option value='6'>Saturday</option>
      </select>
    </label>
  );
};

export default SelectDay;

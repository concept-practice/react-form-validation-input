import React from 'react';
import SelectListItem from '../../../view-models/SelectListItem';
import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const SelectInput: React.FC<SelectInputProps> = ({ field, items }) => {
	return <BaseInput inputType={''} field={field} isSelect={true} items={items}></BaseInput>;
};

interface SelectInputProps {
	field: ViewModelField;
	items: Array<SelectListItem>;
}

export default SelectInput;

import React from 'react';
import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const SelectInput: React.FC<SelectInputProps> = ({ field, setViewModelValid }) => {
	return <BaseInput inputType={''} field={field} isSelect={true} items={field.items} setViewModelValid={setViewModelValid}></BaseInput>;
};

interface SelectInputProps {
	field: ViewModelField;
	setViewModelValid: (valid: boolean) => void;
}

export default SelectInput;

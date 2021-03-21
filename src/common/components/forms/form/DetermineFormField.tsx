import { ReactNode } from 'react';
import ViewModelField from '../../../view-models/ViewModelField';
import DateInput from '../inputs/DateInput';
import { InputType } from '../inputs/InputType';
import NumberInput from '../inputs/NumberInput';
import SelectInput from '../inputs/SelectInput';
import TextInput from '../inputs/TextInput';

const DetermineFormField = (field: ViewModelField, setViewModelValid: (valid: boolean) => void): ReactNode => {
	switch (field.type) {
		case InputType.Text:
			return <TextInput field={field} setViewModelValid={setViewModelValid}></TextInput>;
		case InputType.Date:
			return <DateInput field={field} setViewModelValid={setViewModelValid}></DateInput>;
		case InputType.Number:
			return <NumberInput field={field} setViewModelValid={setViewModelValid}></NumberInput>;
		case InputType.Select:
			return <SelectInput field={field} setViewModelValid={setViewModelValid}></SelectInput>;
		default:
			return <TextInput field={field} setViewModelValid={setViewModelValid}></TextInput>;
	}
};

export default DetermineFormField;

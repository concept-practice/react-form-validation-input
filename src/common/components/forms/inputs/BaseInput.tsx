import React, { useEffect } from 'react';
import ValidationMessage from '../../../validation/ValidationMessage';
import SelectListItem from '../../../view-models/SelectListItem';
import ViewModelField from '../../../view-models/ViewModelField';
import Label from '../../label/Label';
import FormControl from '../layout/FormControl';
import FormField from '../layout/FormField';

const BaseInput: React.FC<BaseInputProps> = ({ field, inputType, isSelect, items, setViewModelValid }) => {
	const inputId = `inputId${field.displayName}`;

	const [value, setValue] = React.useState<string>(field.value);
	const [valid, setIsValid] = React.useState<boolean>(true);
	const [errorMessages, setErrorMessages] = React.useState<Array<string>>([]);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		field.value = event.target.value;
		setValue(event.target.value);
		setIsValid(event.target.validity.valid);
		setViewModelValid(field.IsValid());
	};

	const onSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
		field.value = event.target.value;
		setValue(event.target.value);
		setIsValid(event.target.validity.valid);
		setViewModelValid(field.IsValid());
	};

	useEffect(() => {
		setErrorMessages(field.ErrorMessages());
		setViewModelValid(valid);
	}, [valid, value, field, setViewModelValid]);

	return (
		<FormField>
			<Label name={field.displayName} labelFor={inputId}></Label>
			<FormControl>
				{isSelect ? (
					<div className="select">
						<select id={inputId} required={field.isRequired} value={value} onChange={onSelectChange}>
							{items.map((item) => (
								<option value={item.Value}>{item.Text}</option>
							))}
						</select>
					</div>
				) : (
					<input
						type={inputType}
						value={value}
						className={`input ${valid ? '' : 'is-danger'}`}
						id={inputId}
						required={field.isRequired}
						minLength={field.minLength}
						maxLength={field.maxLength}
						placeholder={field.placeHolder}
						min={field.Min}
						max={field.Max}
						onChange={onChange}></input>
				)}
			</FormControl>
			<ValidationMessage isValid={valid} errorMessages={errorMessages}></ValidationMessage>
		</FormField>
	);
};

interface BaseInputProps {
	field: ViewModelField;
	inputType: string;
	isSelect: boolean;
	items: Array<SelectListItem>;
	setViewModelValid: (valid: boolean) => void;
}

export default BaseInput;

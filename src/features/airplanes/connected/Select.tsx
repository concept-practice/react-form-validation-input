import React from 'react';
import ValidationMessage from '../../../common/validation/ValidationMessage';
import SelectListItem from '../../../common/view-models/SelectListItem';

const Select: React.FC<SelectProps> = ({ value, setValue, options, valid, errors }) => {
	return (
		<div className="field">
			<div className="control">
				<div className={`select ${valid ? '' : 'is-danger'}`}>
					<select value={value} onChange={(e): void => setValue(e.target.value)}>
						{options.map((item) => (
							<option value={item.Value}>{item.Text}</option>
						))}
					</select>
				</div>
			</div>
			<ValidationMessage isValid={valid} errorMessages={errors}></ValidationMessage>
		</div>
	);
};

interface SelectProps {
	value: string;
	setValue: (value: string) => void;
	options: Array<SelectListItem>;
	valid: boolean;
	errors: Array<string>;
}

export default Select;

import React, { useEffect } from 'react';
import SelectListItem from '../../../common/view-models/SelectListItem';
import Select from './Select';

const ConnectedInputs: React.FC<ConnectedInputsProps> = ({ airports }) => {
	const [firstValue, setFirstValue] = React.useState<string>('0');
	const [secondValue, setSecondValue] = React.useState<string>('0');
	const [errors, setErrors] = React.useState<Array<string>>([]);

	const [valid, setValid] = React.useState<boolean>(false);

	useEffect(() => {
		setValid(firstValue !== secondValue);
		setErrors(['Inputs can not be equal to each other.']);
	}, [firstValue, secondValue]);

	return (
		<React.Fragment>
			<Select value={firstValue} setValue={setFirstValue} valid={valid} errors={errors} options={airports}></Select>

			<Select value={secondValue} setValue={setSecondValue} valid={valid} errors={errors} options={airports}></Select>
		</React.Fragment>
	);
};

interface ConnectedInputsProps {
	airports: Array<SelectListItem>;
}

export default ConnectedInputs;

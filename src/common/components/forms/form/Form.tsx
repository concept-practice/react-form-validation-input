import React, { useEffect } from 'react';
import ValidationMessage from '../../../validation/ValidationMessage';
import BaseViewModel from '../../../view-models/BaseViewModel';
import DetermineFormField from './DetermineFormField';

const Form: React.FC<FormProps> = ({ viewModel, onSuccess }) => {
	const [viewModelValid, setViewModelValid] = React.useState<boolean>(true);
	const [errorMessages, setErrorMessages] = React.useState<Array<string>>([]);

	useEffect(() => {
		setViewModelValid(viewModel.ViewModelValid());
		setErrorMessages(viewModel.Fields.flatMap((field) => field.ErrorMessages()));
	}, [viewModelValid, viewModel]);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		onSuccess(viewModel);
		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit}>
			{viewModel.Fields.map((field) => DetermineFormField(field, setViewModelValid))}
			<button type="submit" className="button is-info is-small" disabled={!viewModelValid}>
				Submit
			</button>
			<ValidationMessage isValid={viewModelValid} errorMessages={errorMessages}></ValidationMessage>
		</form>
	);
};

interface FormProps {
	viewModel: BaseViewModel;
	onSuccess(viewModel: BaseViewModel): void;
}

export default Form;

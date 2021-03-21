import React from 'react';
import { ReactNode } from 'react';
import IViewModel from '../../../view-models/IViewModel';

const Form: React.FC<FormProps> = ({ children, viewModel, onSuccess }) => {
	const [viewModelValid, setViewModelValid] = React.useState<boolean>(true);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		if (viewModel.Validate()) {
			onSuccess(viewModel);
		} else {
			setViewModelValid(false);
		}

		event.preventDefault();
	};

	return (
		<form onSubmit={onSubmit}>
			{children}
			<button type="submit" className="button is-info is-small">
				Submit
			</button>
		</form>
	);
};

interface FormProps {
	children: ReactNode;
	viewModel: IViewModel;
	onSuccess(viewModel: IViewModel): void;
}

export default Form;

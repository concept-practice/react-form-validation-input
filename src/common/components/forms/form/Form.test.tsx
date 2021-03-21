import { render, screen } from '@testing-library/react';
import IViewModel from '../../../view-models/IViewModel';
import Form from './Form';
import TextInput from '../inputs/TextInput';

describe('Form', () => {
	test('Submit disabled on validation error', () => {
		class Failure implements IViewModel {
			public Validate = (): boolean => false;
		}

		render(
			<Form viewModel={new Failure()} onSuccess={jest.fn()}>
				<TextInput />
			</Form>
		);

		const button = screen.getByText(/Submit/);

		button.click();

		expect(button).toBeDisabled();
	});

	test('Submit not disabled on validation success', () => {
		class Success implements IViewModel {
			public Validate = (): boolean => true;
		}

		render(
			<Form viewModel={new Success()} onSuccess={jest.fn()}>
				<TextInput />
			</Form>
		);

		const button = screen.getByText(/Submit/);

		button.click();

		expect(button).not.toBeDisabled();
	});
});

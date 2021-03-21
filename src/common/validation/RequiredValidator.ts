import IValidator from './IValidator';

export default class RequiredValidator implements IValidator {
	public IsValid(value: string): boolean {
		return value !== null && value !== undefined && value !== '';
	}

	public ErrorMessage(): string {
		return 'The input must have a value.';
	}
}

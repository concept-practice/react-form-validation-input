import IValidator from './IValidator';

export default class NotEqualToValidator implements IValidator {
	private value: string;

	public constructor(value: string) {
		this.value = value;
	}

	public IsValid(value: string): boolean {
		return this.value !== value;
	}

	public ErrorMessage(): string {
		return `The value can not be the same as ${this.value}.`;
	}
}

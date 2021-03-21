import IValidator from './IValidator';

export default class MinLengthValidator implements IValidator {
	private minimum: number;

	public constructor(minimum: number) {
		this.minimum = minimum;
	}

	public IsValid(value: string): boolean {
		return value.length >= this.minimum;
	}

	public ErrorMessage(): string {
		return `The value must be at least ${this.minimum} letters.`;
	}
}

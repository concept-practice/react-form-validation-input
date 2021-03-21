import IValidator from './IValidator';

export default class MinNumberValidator implements IValidator {
	private minimum: number;

	public constructor(minimum: number) {
		this.minimum = minimum;
	}

	public IsValid(value: string): boolean {
		return Number(value) >= this.minimum;
	}

	public ErrorMessage(): string {
		return `The value must be at least ${this.minimum}`;
	}
}

import IValidator from './IValidator';

export default class MaxLengthValidator implements IValidator {
	private maximum: number;

	public constructor(maximum: number) {
		this.maximum = maximum;
	}

	public IsValid(value: string): boolean {
		return value.length <= this.maximum;
	}

	public ErrorMessage(): string {
		return `The value must be at most ${this.maximum} letters.`;
	}
}

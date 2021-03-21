import IValidator from './IValidator';

export default class MaxNumberValidator implements IValidator {
	private maximum: number;

	public constructor(maximum: number) {
		this.maximum = maximum;
	}

	public IsValid(value: string): boolean {
		return Number(value) <= this.maximum;
	}

	public ErrorMessage(): string {
		return `The value must be at most ${this.maximum}`;
	}
}

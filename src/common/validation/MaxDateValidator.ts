import IValidator from './IValidator';

export default class MaxDateValidator implements IValidator {
	private date: Date;

	public constructor(date: Date) {
		this.date = date;
	}

	public IsValid(value: string): boolean {
		return new Date(value) <= this.date;
	}

	public ErrorMessage(): string {
		return `The date must be at most ${this.date}.`;
	}
}

export default interface IValidator {
	IsValid(value: string): boolean;
	ErrorMessage(): string;
}

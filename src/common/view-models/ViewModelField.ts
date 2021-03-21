import { InputType } from '../components/forms/inputs/InputType';
import IValidator from '../validation/IValidator';
import SelectListItem from './SelectListItem';

export default class ViewModelField {
	public type: InputType;
	public value: string = '';
	public displayName: string = '';
	public placeHolder: string = '';

	//Validation
	public isRequired: boolean = false;

	public minLength: number = 0;
	public maxLength: number = 999;

	private isDateMinMax: boolean;
	private min: number = new Date(1970, 1, 1).getTime();
	private max: number = new Date(2999, 1, 1).getTime();

	public items: Array<SelectListItem>;
	public validators: Array<IValidator>;

	public constructor(type: InputType, items: Array<SelectListItem> = []) {
		this.type = type;
		this.validators = new Array<IValidator>();
		this.isDateMinMax = true;
		this.items = items;
	}

	public SetMinDate(value: Date): void {
		this.isDateMinMax = true;
		this.min = value.getTime();
	}

	public SetMaxDate(value: Date): void {
		this.isDateMinMax = true;
		this.max = value.getTime();
	}

	public SetNumberMin(value: number): void {
		this.isDateMinMax = false;
		this.min = value;
	}

	public SetNumberMax(value: number): void {
		this.isDateMinMax = false;
		this.max = value;
	}

	public get Min(): number | string {
		if (this.isDateMinMax) {
			return new Date(this.min).toISOString().substr(0, 10);
		} else {
			return this.min;
		}
	}

	public get Max(): number | string {
		if (this.isDateMinMax) {
			return new Date(this.max).toISOString().substr(0, 10);
		} else {
			return this.max;
		}
	}

	public IsValid(): boolean {
		return this.validators.every((validator) => validator.IsValid(this.value));
	}

	public ErrorMessages(): Array<string> {
		return this.validators.filter((validator) => !validator.IsValid(this.value)).map((validator) => validator.ErrorMessage());
	}
}

import { InputType } from '../components/forms/inputs/InputType';
import MaxDateValidator from '../validation/MaxDateValidator';
import MaxLengthValidator from '../validation/MaxLengthValidator';
import MaxNumberValidator from '../validation/MaxNumberValidator';
import MinDateValidator from '../validation/MinDateValidator';
import MinLengthValidator from '../validation/MinLengthValidator';
import MinNumberValidator from '../validation/MinNumberValidator';
import RequiredValidator from '../validation/RequiredValidator';
import ViewModelField from './ViewModelField';

export default class ViewModelFieldBuilder {
	private field: ViewModelField;

	public constructor(type: InputType) {
		this.field = new ViewModelField(type);
	}

	public WithDefaultValue(value: string): ViewModelFieldBuilder {
		this.field.value = value;

		return this;
	}

	public WithDefaultNumber(value: number): ViewModelFieldBuilder {
		return this.WithDefaultValue(value.toString());
	}

	public WithDisplayName(value: string): ViewModelFieldBuilder {
		this.field.displayName = value;

		return this;
	}

	public WithPlaceHolder(value: string): ViewModelFieldBuilder {
		this.field.placeHolder = value;

		return this;
	}

	public IsRequired(): ViewModelFieldBuilder {
		this.field.isRequired = true;
		this.field.validators.push(new RequiredValidator());

		return this;
	}

	public WithMinLength(value: number): ViewModelFieldBuilder {
		this.field.minLength = value;
		this.field.validators.push(new MinLengthValidator(value));

		return this;
	}

	public WithMaxLength(value: number): ViewModelFieldBuilder {
		this.field.maxLength = value;
		this.field.validators.push(new MaxLengthValidator(value));

		return this;
	}

	public WithMinDate(value: Date): ViewModelFieldBuilder {
		this.field.SetMinDate(value);
		this.field.validators.push(new MinDateValidator(value));

		return this;
	}

	public WithMaxDate(value: Date): ViewModelFieldBuilder {
		this.field.SetMaxDate(value);
		this.field.validators.push(new MaxDateValidator(value));

		return this;
	}

	public WithMinNumber(value: number): ViewModelFieldBuilder {
		this.field.SetNumberMin(value);
		this.field.validators.push(new MinNumberValidator(value));

		return this;
	}

	public WithMaxNumber(value: number): ViewModelFieldBuilder {
		this.field.SetNumberMax(value);
		this.field.validators.push(new MaxNumberValidator(value));

		return this;
	}

	public Field(): ViewModelField {
		return this.field;
	}
}

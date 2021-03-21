import ViewModelField from './ViewModelField';

export default abstract class BaseViewModel {
	private fields: Array<ViewModelField>;

	protected constructor() {
		this.fields = new Array<ViewModelField>();
	}

	public get Fields(): Array<ViewModelField> {
		return this.fields;
	}

	protected AddFields(fields: Array<ViewModelField>): void {
		this.fields = fields;
	}

	public ViewModelValid(): boolean {
		return this.fields.every((field) => field.IsValid());
	}
}

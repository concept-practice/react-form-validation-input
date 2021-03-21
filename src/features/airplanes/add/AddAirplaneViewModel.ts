import InputFields from '../../../common/view-models/InputFields';
import IViewModel from '../../../common/view-models/IViewModel';
import SelectListItem from '../../../common/view-models/SelectListItem';
import ViewModelField from '../../../common/view-models/ViewModelField';

export default class AddAirplaneViewModel implements IViewModel {
	public Manufacturer: ViewModelField;
	public Date: ViewModelField;
	public Passengers: ViewModelField;
	public Departure: ViewModelField;

	public Airports: Array<SelectListItem>;

	public constructor(airports: Array<SelectListItem>) {
		this.Airports = airports;

		this.Manufacturer = InputFields.TextField()
			.WithDisplayName('Manufacturer')
			.WithPlaceHolder('Manufacturer')
			.IsRequired()
			.WithMinLength(5)
			.WithMaxLength(8)
			.Field();

		this.Date = InputFields.DateField()
			.WithDisplayName('Departure')
			.WithPlaceHolder('Departure')
			.IsRequired()
			.WithMinDate(new Date())
			.WithMaxDate(new Date(2021, 11, 31))
			.Field();

		this.Passengers = InputFields.NumberField()
			.WithDisplayName('Passengers')
			.WithDefaultNumber(1)
			.IsRequired()
			.WithMinNumber(1)
			.WithMaxNumber(10)
			.Field();

		this.Departure = InputFields.SelectField().WithDisplayName('Departure Airport').IsRequired().Field();
	}

	public Validate(): boolean {
		return [this.Manufacturer, this.Departure, this.Departure, this.Passengers].every((x) => x.IsValid());
	}
}

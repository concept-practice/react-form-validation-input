import InputFields from '../../../common/view-models/InputFields';
import BaseViewModel from '../../../common/view-models/BaseViewModel';
import SelectListItem from '../../../common/view-models/SelectListItem';
import ViewModelField from '../../../common/view-models/ViewModelField';

export default class AddAirplaneViewModel extends BaseViewModel {
	public Manufacturer: ViewModelField;
	public Date: ViewModelField;
	public Passengers: ViewModelField;
	public Departure: ViewModelField;
	public Arrival: ViewModelField;

	public constructor(airports: Array<SelectListItem>) {
		super();

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

		this.Departure = InputFields.SelectField(airports).WithDisplayName('Departure Airport').IsRequired().Field();

		this.Arrival = InputFields.SelectField(airports).WithDisplayName('Arrival').IsRequired().NotEqualTo(this.Departure.value).Field();

		this.AddFields([this.Manufacturer, this.Date, this.Passengers, this.Departure, this.Arrival]);
	}
}

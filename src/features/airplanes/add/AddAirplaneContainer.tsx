import SelectListItem from '../../../common/view-models/SelectListItem';
import AirplaneHandler from '../common/AirplaneHandler';
import AddAirplane from './AddAirplane';
import AddAirplaneViewModel from './AddAirplaneViewModel';

const AddAirplaneContainer: React.FC = () => {
	const handler = new AirplaneHandler();

	const airports = new Array<SelectListItem>();
	airports.push(new SelectListItem('Kansas City - MCI', '1'));
	airports.push(new SelectListItem('Columbus - CMH', '2'));

	return <AddAirplane viewModel={new AddAirplaneViewModel(airports)} addAirplane={handler.AddAirplane}></AddAirplane>;
};

export default AddAirplaneContainer;

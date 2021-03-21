import React from 'react';
import Form from '../../../common/components/forms/form/Form';
import DateInput from '../../../common/components/forms/inputs/DateInput';
import NumberInput from '../../../common/components/forms/inputs/NumberInput';
import SelectInput from '../../../common/components/forms/inputs/SelectInput';
import TextInput from '../../../common/components/forms/inputs/TextInput';
import CenteredInContainer from '../../../common/components/layout/CenteredInContainer';
import AddAirplaneViewModel from './AddAirplaneViewModel';

const AddAirplane: React.FC<AddAirplaneProps> = ({ viewModel, addAirplane }) => {
	return (
		<CenteredInContainer>
			<Form viewModel={viewModel} onSuccess={addAirplane}>
				<TextInput field={viewModel.Manufacturer}></TextInput>
				<DateInput field={viewModel.Date}></DateInput>
				<NumberInput field={viewModel.Passengers}></NumberInput>
				<SelectInput field={viewModel.Departure} items={viewModel.Airports}></SelectInput>
			</Form>
		</CenteredInContainer>
	);
};

interface AddAirplaneProps {
	viewModel: AddAirplaneViewModel;
	addAirplane(viewMode: AddAirplaneViewModel): void;
}

export default AddAirplane;

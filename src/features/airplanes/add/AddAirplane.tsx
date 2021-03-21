import React from 'react';
import Form from '../../../common/components/forms/form/Form';
import CenteredInContainer from '../../../common/components/layout/CenteredInContainer';
import AddAirplaneViewModel from './AddAirplaneViewModel';

const AddAirplane: React.FC<AddAirplaneProps> = ({ viewModel, addAirplane }) => {
	return (
		<CenteredInContainer>
			<Form viewModel={viewModel} onSuccess={addAirplane}></Form>
		</CenteredInContainer>
	);
};

interface AddAirplaneProps {
	viewModel: AddAirplaneViewModel;
	addAirplane(viewMode: AddAirplaneViewModel): void;
}

export default AddAirplane;

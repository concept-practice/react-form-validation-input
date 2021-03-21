import SelectListItem from '../../../common/view-models/SelectListItem';
import ConnectedInputs from './ConnectedInputs';

const ConnectedInputsContainer: React.FC = () => {
	return <ConnectedInputs airports={[new SelectListItem('MCI', '1'), new SelectListItem('PHX', '2')]}></ConnectedInputs>;
};

export default ConnectedInputsContainer;

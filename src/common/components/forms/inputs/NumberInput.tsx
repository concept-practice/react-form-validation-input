import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const NumberInput: React.FC<NumberInputProps> = ({ field, setViewModelValid }) => {
	return <BaseInput inputType={'number'} field={field} isSelect={false} items={[]} setViewModelValid={setViewModelValid}></BaseInput>;
};

interface NumberInputProps {
	field: ViewModelField;
	setViewModelValid: (valid: boolean) => void;
}

export default NumberInput;

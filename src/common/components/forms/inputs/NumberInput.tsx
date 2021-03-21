import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const NumberInput: React.FC<NumberInputProps> = ({ field }) => {
	return <BaseInput inputType={'number'} field={field} isSelect={false} items={[]}></BaseInput>;
};

interface NumberInputProps {
	field: ViewModelField;
}

export default NumberInput;

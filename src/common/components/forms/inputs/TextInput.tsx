import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const TextInput: React.FC<TextInputProps> = ({ field, setViewModelValid }) => {
	return <BaseInput field={field} inputType="text" isSelect={false} items={[]} setViewModelValid={setViewModelValid}></BaseInput>;
};

interface TextInputProps {
	field: ViewModelField;
	setViewModelValid: (valid: boolean) => void;
}

export default TextInput;

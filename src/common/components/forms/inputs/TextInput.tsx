import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const TextInput: React.FC<TextInputProps> = ({ field }) => {
	return <BaseInput field={field} inputType="text" isSelect={false} items={[]}></BaseInput>;
};

interface TextInputProps {
	field: ViewModelField;
}

export default TextInput;

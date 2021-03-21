import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const DateInput: React.FC<DateInputProps> = ({ field, setViewModelValid }) => {
	return <BaseInput inputType={'date'} field={field} isSelect={false} items={[]} setViewModelValid={setViewModelValid}></BaseInput>;
};

interface DateInputProps {
	field: ViewModelField;
	setViewModelValid: (valid: boolean) => void;
}

export default DateInput;

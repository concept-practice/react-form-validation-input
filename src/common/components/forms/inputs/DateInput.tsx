import ViewModelField from '../../../view-models/ViewModelField';
import BaseInput from './BaseInput';

const DateInput: React.FC<DateInputProps> = ({ field }) => {
	return <BaseInput inputType={'date'} field={field} isSelect={false} items={[]}></BaseInput>;
};

interface DateInputProps {
	field: ViewModelField;
}

export default DateInput;

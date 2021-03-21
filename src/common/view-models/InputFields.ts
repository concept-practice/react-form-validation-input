import { InputType } from '../components/forms/inputs/InputType';
import ViewModelFieldBuilder from './ViewModelFieldBuilder';

export default class InputFields {
	public static TextField(): ViewModelFieldBuilder {
		return new ViewModelFieldBuilder(InputType.Text);
	}

	public static DateField(): ViewModelFieldBuilder {
		return new ViewModelFieldBuilder(InputType.Date);
	}

	public static NumberField(): ViewModelFieldBuilder {
		return new ViewModelFieldBuilder(InputType.Number);
	}

	public static SelectField(): ViewModelFieldBuilder {
		return new ViewModelFieldBuilder(InputType.Select);
	}
}

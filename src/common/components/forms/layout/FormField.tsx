import { ReactNode } from 'react';

const FormField: React.FC<FormFieldProps> = ({ children }) => {
	return <div className="field">{children}</div>;
};

interface FormFieldProps {
	children: ReactNode;
}

export default FormField;

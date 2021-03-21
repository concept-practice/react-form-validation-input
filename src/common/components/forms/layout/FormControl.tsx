import { ReactNode } from 'react';

const FormControl: React.FC<FormControlProps> = ({ children }) => {
	return <div className="control">{children}</div>;
};

interface FormControlProps {
	children: ReactNode;
}

export default FormControl;

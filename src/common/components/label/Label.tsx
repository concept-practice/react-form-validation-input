const Label: React.FC<LabelProps> = ({ name, labelFor }) => {
	return (
		<label className="label" htmlFor={labelFor}>
			{name}
		</label>
	);
};

interface LabelProps {
	name: string;
	labelFor: string;
}

export default Label;

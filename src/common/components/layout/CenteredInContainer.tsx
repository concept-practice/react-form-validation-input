import { ReactNode } from 'react';

const CenteredInContainer: React.FC<CenteredInContainerProps> = ({ children }) => {
	return (
		<div className="container">
			<div className="columns">
				<div className="column"></div>
				<div className="column">{children}</div>

				<div className="column"></div>
			</div>
		</div>
	);
};

interface CenteredInContainerProps {
	children: ReactNode;
}

export default CenteredInContainer;

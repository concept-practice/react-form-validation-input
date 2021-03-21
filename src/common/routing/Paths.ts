import AddAirplaneContainer from '../../features/airplanes/add/AddAirplaneContainer';
import ConnectedInputsContainer from '../../features/airplanes/connected/ConnectedInputsContainer';
import Home from '../../features/home/Home';
import LinkPath from './LinkPath';

export default class Paths {
	public static Home(): LinkPath {
		return new LinkPath('/', 'Home', Home);
	}

	public static AddAirplane(): LinkPath {
		return new LinkPath('/airplanes/add', 'Add Airplane', AddAirplaneContainer);
	}

	public static Connected(): LinkPath {
		return new LinkPath('/connected', 'Connected', ConnectedInputsContainer);
	}

	public static AllPaths(): Array<LinkPath> {
		return [this.AddAirplane(), this.Connected(), this.Home()];
	}
}

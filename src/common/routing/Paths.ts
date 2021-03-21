import AddAirplaneContainer from '../../features/airplanes/add/AddAirplaneContainer';
import Home from '../../features/home/Home';
import LinkPath from './LinkPath';

export default class Paths {
	public static Home(): LinkPath {
		return new LinkPath('/', 'Home', Home);
	}

	public static AddAirplane(): LinkPath {
		return new LinkPath('/airplanes/add', 'Add Airplane', AddAirplaneContainer);
	}

	public static AllPaths(): Array<LinkPath> {
		return [this.AddAirplane(), this.Home()];
	}
}

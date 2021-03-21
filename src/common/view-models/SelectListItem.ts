export default class SelectListItem {
	private text: string;
	private value: string;

	public constructor(text: string, value: string) {
		this.text = text;
		this.value = value;
	}

	public get Text(): string {
		return this.text;
	}

	public get Value(): string {
		return this.value;
	}
}

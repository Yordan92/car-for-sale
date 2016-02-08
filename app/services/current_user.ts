export class CurrentUser {
	user;
	get() {
		return this.user;
	}
	set(user): void {
		this.user = user;
	}

};

type BasicProperyType = {
	type: string;
	required: [boolean, string];
	unique: [boolean, string];
};

export interface UserSchema extends Document {
	username: BasicProperyType;
	password: BasicProperyType;
}

export interface ChatSchema extends Document {
	chatTitle: BasicProperyType;
	users: {
		type: string;
		required: [boolean, string];
		unique: [boolean, string];
	};
}

export type MongoUser = {
	_id: string;
	username: string;
};

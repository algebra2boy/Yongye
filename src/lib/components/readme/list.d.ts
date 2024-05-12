export type ListItem = {
	name: string;
	isOrdered?: boolean;
	children?: ListItem[];
};

export type TODO = {
	name: string;
	isCompleted?: boolean;
};
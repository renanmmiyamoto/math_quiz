export const OPERATIONS = {
	ADDITION: {
		label: "Adição",
		symbol: "+",
	},
	SUBTRACTION: {
		label: "Subtração",
		symbol: "-",
	},
	MULTIPLICATION: {
		label: "Multiplicação",
		symbol: "x",
	},
	DIVISION: {
		label: "Divisão",
		symbol: "/",
	},
};

export type User = {
	id: string;
	name: string;
	email: string;
	bornDate: string;
	createdAt: string;
	updatedAt: string;
};

export type Exercise = {
	id: string;
	operation: keyof typeof OPERATIONS;
	user: User;
	_count: {
		results: number;
	};
};

export type Result = {
	id: string;
	calculation: string;
	operation: keyof typeof OPERATIONS;
	response: string;
	trueResponse: string;
	isCorrect: boolean;
	duration: number;
	effort: number;
	exerciseId: string;
	exercise: Exercise;
	createdAt: string;
	updatedAt: string;
};

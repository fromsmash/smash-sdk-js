module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	testMatch: [
		"**/?(*.)+(spec|test).+(ts|js)",
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
	},
};

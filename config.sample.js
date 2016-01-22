module.exports = {
	client_id: process.env.client_id,
	secret: process.env.secret,
	scope: "",
	redirectURI: 'http://localhost:8080/callback', //make sure this is the same as the callback URI in github

	// This token has to be from a user with permission to add students on Github
	ownerPersonalAccessToken: process.env.ownerPersonalAccessToken,

	// User has to be a member of this group to add students
	mentorGroupId: 1163900,

	// Invitations will be sent to join this group
	studentGroupId: 1163900,

	// The name of the host
	host: "localhost",
	// The port for the server
	port: 8080
};

# Invite GCI students to FOSSASIA Github team [![Build Status](https://travis-ci.org/YagoGG/fossasia-gci-invite.svg?branch=feature%2Ftravis)](https://travis-ci.org/YagoGG/fossasia-gci-invite)
This application is used by FOSSASIA mentors to send invitations to FOSSASIA GCI students.

## Running locally for development

1. Fork the repo.
2. Clone your fork.
3. Run `npm install` inside the directory you just cloned.
4. Copy `config.sample.js` and rename the copy to `config.js`.
5. [Register a new app](https://github.com/settings/applications/new) with Github. Use `http://localhost:8080/callback` as the **callback url**
6. Update `config.js` file with your GitHub `client_id` and `secret` you got from step 5.
7. Run `npm start` to start the server.  
8. Go to `http://localhost:8080/` to see the application.

See config.sample.js for info about the configurations.

## Testing

For detailed instructions on how to test this app, go to the `test` directory.

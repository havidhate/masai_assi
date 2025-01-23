// Function to simulate user registration
function registerUser(username, callback) {
    setTimeout(() => {
        if (!username) {
            callback("Error: Username cannot be empty");
            return;
        }
        console.log(`User '${username}' registered successfully`);
        callback(null, username);
    }, 1000);
}

// Function to simulate sending a verification email
function sendVerification(username, callback) {
    setTimeout(() => {
        if (Math.random() < 0.2) { // Simulate random failure with 20% chance
            callback(`Error: Failed to send verification email to ${username}`);
            return;
        }
        console.log(`Verification email sent to '${username}'`);
        callback(null, username);
    }, 1000);
}

// Function to simulate user login
function loginUser(username, callback) {
    setTimeout(() => {
        if (Math.random() < 0.2) { // Simulate random failure with 20% chance
            callback(`Error: Login failed for ${username}`);
            return;
        }
        console.log(`User '${username}' logged in successfully`);
        callback(null, username);
    }, 1000);
}

// Function to simulate welcome message display
function displayWelcomeMessage(username, callback) {
    setTimeout(() => {
        console.log(`Welcome, ${username}! Your account is now active.`);
        callback(null, "Success");
    }, 1000);
}

// Simulate the full user registration workflow
function startWorkflow(username) {
    registerUser(username, (error, registeredUser) => {
        if (error) {
            console.error(error);
            return;
        }

        sendVerification(registeredUser, (error, verifiedUser) => {
            if (error) {
                console.error(error);
                return;
            }

            loginUser(verifiedUser, (error, loggedInUser) => {
                if (error) {
                    console.error(error);
                    return;
                }

                displayWelcomeMessage(loggedInUser, (error, successMessage) => {
                    if (error) {
                        console.error(error);
                        return;
                    }
                    console.log("Workflow completed successfully!");
                });
            });
        });
    });
}

// Start the user registration workflow
startWorkflow("John Doe");

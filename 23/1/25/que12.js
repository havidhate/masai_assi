function simulateLoadingScreen() {
    let counter = 0;

    // Start logging "Loading..." every 1 second
    const loadingInterval = setInterval(() => {
        console.log("Loading...");
        counter++;

        // Stop the loading messages after 5 seconds
        if (counter === 5) {
            clearInterval(loadingInterval);  // Stop the interval
            console.log("Loaded successfully!");
        }
    }, 1000);
}

simulateLoadingScreen()

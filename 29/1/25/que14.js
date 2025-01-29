// Simulating a data fetching function with a 50% chance of success/failure
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Data fetched successfully!");
            } else {
                reject("Network error: Failed to fetch data.");
            }
        }, 1000); // Simulating 1-second delay
    });
}

// Async function to handle the data fetching
async function fetchDataHandler() {
    try {
        const result = await fetchData(); // Await the result of fetchData
        console.log(result);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Simulating the workflow
fetchDataHandler();

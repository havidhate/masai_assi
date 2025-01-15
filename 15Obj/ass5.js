const user = {
    id: 123,
    profile: {
        name: "John Doe",
        address: {
            city: "Los Angeles",
            zipcode: "90001"
        }
    },
    print: () => {
        console.log(`${user.profile.name} lives in ${user.profile.address.city}, ${user.profile.address.zipcode}`);
    }
};

user.print(); // Output: John Doe lives in Los Angeles, 90001
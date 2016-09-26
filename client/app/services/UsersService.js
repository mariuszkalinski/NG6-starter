function UsersService() {
    "ngInject";

    // private variable to store our users entries
    const users = [
        {
            name: "User 1",
            age: 23,
            about: "I'm a demo user, and this is my bio",
            photo: "http://images.northrup.org/picture/xl/animals/billy-goat-profile1.jpg"
        },
        {
            name: "User 2",
            age: 51,
            about: "I'm a demo user, and this is my bio 2",
            photo: "http://images.northrup.org/picture/xl/animals/billy-goat-profile1.jpg"
        },
        {
            name: "User 22",
            age: 41,
            about: "I'm a demo user, and this is my bio 2",
            photo: "http://images.northrup.org/picture/xl/animals/billy-goat-profile1.jpg"
        },
        {
            name: "User 12",
            age: 21,
            about: "I'm a demo user, and this is my bio 2",
            photo: "http://images.northrup.org/picture/xl/animals/billy-goat-profile1.jpg"
        },
        {
            name: "User 132",
            age: 11,
            about: "I'm a demo user, and this is my bio 2",
            photo: "http://images.northrup.org/picture/xl/animals/billy-goat-profile1.jpg"
        }
    ];

    return {

        // Will retrieve our user list for displaying
        getUsers(filter = '') {
            let filteredData = filter === '' ? users : users.filter(user => user.name === filter);
            return filteredData;
        },

        // Creating a new user entry based on user input.
        createUser(user) {

            const {name, age, about, photo} = user;

            const tempUser = {
                about,
                photo,
                name,
                age
            };

            users.push(tempUser);
        }
    }
}

export default UsersService;

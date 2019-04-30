const insertUser = () => {
    var users = [
        {firstname: "Abdel", lastname: "Parisien", member: true},
        {firstname: "Jessy", lastname: "Basketix", member: false},
        {firstname: "Laurence", lastname: "Doe", member: false}
    ];
    users.forEach(u => {
        var user = new User(u);
        user.save().then(res => {
            console.log('Utilisateur ajouté');
        })
    })
}

module.exports = insertUser;
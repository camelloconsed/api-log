db.createUser(
    {
        user : "admin",
        pwd : "123123",
        roles: [
            {
                role : "readWrite",
                db : "logDB"
            }
        ]
    }
)
import { User } from "../shared/user/User";

export class UserService {
    public usersDb: User[] = [];

    constructor() {
        this.populateDb();
    }

    private populateDb() {
        //TODO: Update IDs with actual FB Ids
        this.usersDb.push(new User('Louis Pujol', 1314119188601872));
        this.usersDb.push(new User('Lauren Hunter', 746452268710522));
        this.usersDb.push(new User('Kevin Fung', 2));
        this.usersDb.push(new User('Kevin Hudson', 3));
        this.usersDb.push(new User('Melissa Feather', 683210195161618));
    }
}
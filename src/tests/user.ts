import "mocha";
import { IUser } from "../interfaces/i_user";
import { IUserModel } from "../models/user";
import { userSchema } from "../schemas/user";

//use q promises
global.Promise = require("q").Promise;

//import mongoose
import mongoose = require("mongoose");

//use q library for mongoose promise
mongoose.Promise = global.Promise;

const dbs:any[] = [
    {
        db_host : "s125262.mlab.com:25262",
        db_user_root : "xvr2frts-db_root",
        db_user_visitor : "",
        db_password : "Se5ah9bh!",
        db_name : "xvr2frts-db"
    }
];
 

//connect to mongoose and create model
const MONGODB_CONNECTION: string = 'mongodb://db_user:db_password@db_host/db_name'.replace(/db_user|db_password|db_host|db_name/gi, function(matched){ return dbs[0][matched] });
//const MONGODB_CONNECTION: string = "mongodb://localhost:27017/heros";
let connection: mongoose.Connection = mongoose.createConnection(MONGODB_CONNECTION);
var User: mongoose.Model<IUserModel> = connection.model<IUserModel>("User", userSchema);

//require chai and use should() assertions
let chai = require("chai");
chai.should();

describe("User", function() {

    describe("create()", function () {
        it("should create a new User", function () {
            //user object
            let user: IUser = {
                email: "foo@bar.com",
                firstName: "Brian",
                lastName: "Love"
            };

            //create user and return promise
            return new User(user).save().then(result => {
                //verify _id property exists
                result._id.should.exist;

                //verify email
                result.email.should.equal(user.email);

                //verify firstName
                result.firstName.should.equal(user.firstName);

                //verify lastName
                result.lastName.should.equal(user.lastName);
            });
        });
    });
});
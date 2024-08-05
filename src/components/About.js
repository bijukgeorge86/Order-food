import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);
        //console.log("Parent Constuctor");
    }
    componentDidMount() {
        //console.log("Parent Component Did Mount");
    }
    render() {
        //console.log("Parent Render Method");
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn User
                    {/*  <UserContext.Consumer> </UserContext.Consumer> -> It is used to access 'Context API' in Class Based Components */}
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">
                                {loggedInUser}
                            </h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is namastae react</h2>
                <h3>Below is Class Based Component.</h3>
                <UserClass
                    name={"Biju Kattunilathu George"}
                    location={"Norway"}
                />
            </div>
        );
    }
}

export default About;

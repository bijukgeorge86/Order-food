import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy",
                location: "Default",
                login: "Login",
                avatar_url: "https://dummmy-photo.com",
            },
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/bijukgeorge86");
        const json = await data.json();

        //console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate() {
        //console.log("Component Did Update");
    }

    componentWillUnmount() {
        // console.log("Component Will Unmount");
    }

    render() {
        const { name, location, login, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location : {location}</h3>
                <h4>Contact : {login}</h4>
            </div>
        );
    }
}

export default UserClass;

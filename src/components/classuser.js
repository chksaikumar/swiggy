import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "classUserPavi", increment: 0, user: {} };
  }

  async componentDidMount() {
    const obj = await fetch("https://api.github.com/users/chksaikumar");
    const data = await obj.json();

    this.setState({ user: data });
  }
  render() {
    console.log(this.state);
    return (
      <div className="classComponent">
        <h1>Name: {this.state.user.name}</h1>
        <img src={this.state.user.avatar_url} alt="IMG"></img>
      </div>
    );
  }
}

export default UserClass;

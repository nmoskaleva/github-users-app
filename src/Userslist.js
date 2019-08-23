import React from "react";

class Userslist extends React.Component {
  componentDidMount() {
    console.log("didMount from Userlist");
  }

  render() {
    const usersGitHub = this.props.gitHubUsers;
    return (
      <div>
        {this.props.parentState === "done" &&
        this.props.gitHubUsers.length > 0 ? ( 
          <div>
            {usersGitHub.map(user => (
              <li key={user.id}>{user.login}</li>
            ))}
          </div>
        ) : (
          <p>No users found</p>
        )}
      </div>
    );
  }
}

export default Userslist;
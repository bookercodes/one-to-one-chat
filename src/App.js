import React, { Component } from "react";
import "./App.css";
import ContactList from "./ContactList";
import { ChatManager, TokenProvider } from "@pusher/chatkit";

class App extends Component {
  constructor() {
    super();
    this.chatkit = new ChatManager({
      instanceLocator: "v1:us1:2e69e1cf-84b0-4bd2-9c9f-c076360567f8",
      userId: "booker",
      tokenProvider: new TokenProvider({
        url:
          "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/2e69e1cf-84b0-4bd2-9c9f-c076360567f8/token"
      })
    });
  }

  async componentDidMount() {
    const currentUser = await this.chatkit.connect();
    // React basic authentication. Server should work for React and React Native
    // Authentication is quite important for this app
    // Could use Auth0 but then anyone dl will need insance keys
    // Create meta-room room
    // What ID?
    // const rooms = currentUser.getJoinableRooms() ||
    const room = await currentUser.joinRoom({
      roomId: "123"
    });
    console.log("currentUser", currentUser);
  }

  render() {
    return (
      <div className="App">
        <ContactList />
      </div>
    );
  }
}

export default App;

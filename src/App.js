import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

//Hello this is the main files

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}

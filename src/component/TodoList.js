import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class TodoList extends Component {
  render() {
    return (
      <section>
        <div>Hello from the todo list making</div>
        <TodoItems />
      </section>
    );
  }
}

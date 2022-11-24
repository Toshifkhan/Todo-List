import React, { Component } from "react";
import TodoItems from "./TodoItems";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul>
        <h3 className="text-capitalize text-center">Todo-List</h3>
        {items.map((item) => {
          return (
            <TodoItems
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button
          type="button"
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          clear List{" "}
        </button>
      </ul>
    );
  }
}

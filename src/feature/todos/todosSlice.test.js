import reducer from "./todosSlice";

describe("todos reducer", () => {
  it("initial state", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should handle 'todos/addTodo'", () => {
    expect(
      reducer([], {
        type: "todos/addTodo",
        payload: "My first todo",
      })
    ).toEqual(["My first todo"]);

    expect(
      reducer(["My first todo"], {
        type: "todos/addTodo",
        payload: "My second todo",
      })
    ).toEqual(["My first todo", "My second todo"]);
  });
});

export class TodoListDataService {
    static state = [];

    static initilalizeState(state) {
        this.state = state;
    }

    static addTodoItem(id, value, checked) {
        this.state.push({ id: id, value: value, checked: checked });
        console.log(this.state);
    }

    static updateTodoItem(id, value) {
        let todoItem = this.state.find((t) => t.id === id);
        todoItem.value = value;
        console.log(this.state);
    }

    static checkTodoItem(id, checked) {
        let todoItem = this.state.find((t) => t.id === id);
        todoItem.checked = checked;
        console.log(this.state);
    }

    static deleteTodoItem(id) {
        this.state = this.state.filter((t) => t.id !== id);
        console.log(this.state);
    }
}
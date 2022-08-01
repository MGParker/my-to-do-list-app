import { TodoListDataService } from "./services/todoListService.js";

const AppTemplate = document.createElement("template");
AppTemplate.innerHTML = `
    <style>
        @import url('./src/appComponent.css')
    </style>
    <div class="app-component">
        <div class="todo-list-container">
            <h1 style="margin-bottom: 28px">To Do List</h1>
            <div class="todo-items">
            </div>
            <button class="add-todo-item-btn">+</button>
        </div>
    </div>
`;

export class AppComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(AppTemplate.content.cloneNode(true));

        TodoListDataService.initilalizeState([]);

        this.todoList = this.shadowRoot.querySelector(".todo-list-container");
        this.todoItems = this.todoList.querySelector(".todo-items");
        this.addTodoItemBtn = this.todoList.querySelector(".add-todo-item-btn");
    }
    
    connectedCallback() {
        this.addTodoItemBtn.addEventListener("click", (e) => this.addTodoItem(e).then(console.log("Success")).catch(function(err) {
            console.log(err);
        }));
    }

    addTodoItem(e) {
        return new Promise((resolve, reject) => {
            e.stopPropagation();
            let todoItem = document.createElement("todo-item");
            
            if (typeof todoItem !== "undefined") {
                resolve(this.todoItems.appendChild(todoItem));
            } else {
                reject(new Error("Something went wrong!"));
            }
        })
    }

    disconnectedCallback() {}
}
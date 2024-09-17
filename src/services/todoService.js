import { TodoModel } from "../models/todo";

export const getAllTodos = async () => {
    try {
        const allTodos = await TodoModel.find();
        return allTodos;
    } catch (error) {
        throw error;
    }
}

export const createTodo = async (newTodo) => {
    try {
        const { body } = newTodo;
        const todoToInsert = await TodoModel.create({ body });
        return todoToInsert;
    } catch (error) {
        throw error;
    }
}

export const updateTodo = async (todoId) => {
    try {
        const updateTodo = await TodoModel.findByIdAndUpdate(todoId, { completed:true }, { new: true });
        return updateTodo;
    } catch (error) {
        throw error;
    }
}

export const deleteTodo = async (todoId) => {
    try {
        await TodoModel.findByIdAndDelete(todoId);
    } catch (error) {
        throw error;
    }
}

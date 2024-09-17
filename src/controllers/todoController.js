const service = require("../services/todoService");

export const getAllTodos = async (req, res) => {
    try {
        const allTodos = await service.getAllTodos();
        res.send({ status: "OK", data: allTodos });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
export const createTodo = async (req, res) => {
    const { body: todoBody } = req.body;
    if (!todoBody) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "One of the following keys is missing or is empty in request body: 'body'",
                },
            });
        return;
    }
    const newTodo = {
        body: todoBody,
    };

    try {
        const createdTodo = await service.createTodo(newTodo);
        res.status(201).send({ status: "OK", data: createdTodo });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
export const updateTodo = async (req, res) => {
    const { todoId } = req.params;
    if (!todoId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':todoId' can not be empty" },
            });
    }
    try {
        const updatedTodo = await service.updateTodo(todoId);
        res.send({ status: "OK", data: updatedTodo });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
export const deleteTodo = async (req, res) => {
    const { todoId } = req.params;
    if (!todoId) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':todoId' cannot be empty" },
            });
    }
    try {
        await service.deleteTodo(todoId);
        res.status(200).send({ status: "OK" });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

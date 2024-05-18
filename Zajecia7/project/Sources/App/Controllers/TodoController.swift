import Fluent
import Vapor

struct TodoController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let todos = routes.grouped("todos")

        todos.get(use: getAll)
        todos.post(use: create)
        todos.group(":todoID") { todo in
            todo.get(use: getProd)
            todo.put(use: update)
            todo.delete(use: delete)
        }
    }
        
    func getAll(req: Request) async throws -> [TodoDTO] {
        do {
            let todos = try await Todo.query(on: req.db).all().map { $0.toDTO() }
            return todos
        } catch {
            req.logger.error("Failed to fetch todos: \(error.localizedDescription)")
            throw Abort(.internalServerError, reason: "Failed to fetch todos")
        }
    }

    func create(req: Request) async throws -> TodoDTO {
        let todo = try req.content.decode(TodoDTO.self).toModel()

        try await todo.save(on: req.db)
        return todo.toDTO()
    }

    func delete(req: Request) async throws -> HTTPStatus {
        guard let todo = try await Todo.find(req.parameters.get("todoID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await todo.delete(on: req.db)
        return .noContent
    }

    func getProd(req: Request) async throws -> TodoDTO {
        guard let todo = try await Todo.find(req.parameters.get("todoID"), on: req.db) else {
            throw Abort(.notFound)
        }

        return todo.toDTO()
    }

    func update(req: Request) async throws -> TodoDTO {
        let updatedTodo = try req.content.decode(TodoDTO.self).toModel()

        guard let todo = try await Todo.find(req.parameters.get("todoID"), on: req.db) else {
            throw Abort(.notFound)
        }

        todo.name = updatedTodo.name
        todo.price = updatedTodo.price

        try await todo.save(on: req.db)
        return todo.toDTO()
    }
}

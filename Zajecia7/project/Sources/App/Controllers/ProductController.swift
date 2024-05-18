import Fluent
import Vapor

struct ProductController: RouteCollection {
    func boot(routes: RoutesBuilder) throws {
        let products = routes.grouped("products")

        products.get(use: getAll)
        products.post(use: create)
        products.group(":productID") { product in
            product.get(use: getProd)
            product.put(use: update)
            product.delete(use: delete)
        }
    }
        
    func getAll(req: Request) async throws -> [ProductDTO] {
        do {
            let products = try await Product.query(on: req.db).all().map { $0.toDTO() }
            return products
        } catch {
            req.logger.error("Failed to fetch products: \(error.localizedDescription)")
            throw Abort(.internalServerError, reason: "Failed to fetch products")
        }
    }

    func create(req: Request) async throws -> ProductDTO {
        let product = try req.content.decode(ProductDTO.self).toModel()

        try await product.save(on: req.db)
        return product.toDTO()
    }

    func delete(req: Request) async throws -> HTTPStatus {
        guard let product = try await Product.find(req.parameters.get("productID"), on: req.db) else {
            throw Abort(.notFound)
        }

        try await product.delete(on: req.db)
        return .noContent
    }

    func getProd(req: Request) async throws -> ProductDTO {
        guard let product = try await Product.find(req.parameters.get("productID"), on: req.db) else {
            throw Abort(.notFound)
        }

        return product.toDTO()
    }

    func update(req: Request) async throws -> ProductDTO {
        let updatedProduct = try req.content.decode(ProductDTO.self).toModel()

        guard let product = try await Product.find(req.parameters.get("productID"), on: req.db) else {
            throw Abort(.notFound)
        }

        product.name = updatedProduct.name
        product.price = updatedProduct.price

        try await product.save(on: req.db)
        return product.toDTO()
    }
}

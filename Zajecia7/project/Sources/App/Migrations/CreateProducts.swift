import Fluent

struct CreateProducts: AsyncMigration {
    func prepare(on database: Database) async throws {
        print("Running migration: Creating 'products' table")
        try await database.schema("products")
            .id()
            .field("name", .string, .required)
            .field("price", .double, .required)
            .create()
        print("Migration completed: 'products' table created")
    }

    func revert(on database: Database) async throws {
        try await database.schema("products").delete()
    }
}

import Fluent
import Vapor

struct TodoDTO: Content {
    var id: UUID?
    var name: String?
    var price: Double?
    
    func toModel() -> Todo {
        let model = Todo()
        
        model.id = self.id
        if let name = self.name {
            model.name = name
        }
        if let price = self.price {
            model.price = price
        }
        return model
    }
}

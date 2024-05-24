import 'package:flutter/material.dart';
import 'models/category.dart';
import 'models/product.dart';

void main() {
  runApp(const MyApp());
}

final List<Category> categories = [
  Category(id: '1', name: 'Phone'),
  Category(id: '2', name: 'Tablet'),
  Category(id: '3', name: 'Laptop'),
];

final List<Product> products = [
  Product(id: '1', name: 'Samsung Galaxy S21', price: 799, categoryId: '1'),
  Product(id: '2', name: 'iPhone 13 Pro', price: 999, categoryId: '1'),
  Product(id: '3', name: 'Google Pixel 6', price: 599, categoryId: '1'),
  Product(id: '4', name: 'iPad Pro', price: 1099, categoryId: '2'),
  Product(id: '5', name: 'Samsung Galaxy Tab S7', price: 650, categoryId: '2'),
  Product(id: '6', name: 'Amazon Fire HD 10', price: 150, categoryId: '2'),
  Product(id: '7', name: 'MacBook Pro 14-inch', price: 1999, categoryId: '3'),
  Product(id: '8', name: 'Dell XPS 13', price: 1200, categoryId: '3'),
  Product(id: '9', name: 'HP Spectre x360', price: 1100, categoryId: '3'),
];

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: CategoryListPage(),
    );
  }
}

class CategoryListPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Categories')),
      body: ListView.builder(
          itemCount: categories.length,
          itemBuilder: (context, index) {
            final category = categories[index];
            return ListTile(
              title: Text(category.name),
              onTap: () {
                Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => ProductsPage(categoryId: category.id, categoryName: category.name),
                    ),
                );
              },
            );
          },
      ),
    );
  }
}

class ProductsPage extends StatelessWidget {
  final String categoryId;
  final String categoryName;

  ProductsPage({required this.categoryId, required this.categoryName});

  @override
  Widget build(BuildContext context) {
    final categoryProducts = products.where((element) => element.categoryId == categoryId).toList();
    return Scaffold(
      appBar: AppBar(title: Text(categoryName)),
      body: ListView.builder(
          itemCount: categoryProducts.length,
          itemBuilder: (context, index) {
            final product = categoryProducts[index];
            return ListTile(
              title: Text(product.name),
              subtitle: Text('\$${product.price}'),
            );
          }
      ),
    );
  }
}


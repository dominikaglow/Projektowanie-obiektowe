<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    'app_product_index' => [[], ['_controller' => 'App\\Controller\\ProductController::index'], [], [['text', '/product/']], [], [], []],
    'app_product_new' => [[], ['_controller' => 'App\\Controller\\ProductController::new'], [], [['text', '/product/new']], [], [], []],
    'app_product_show' => [['id'], ['_controller' => 'App\\Controller\\ProductController::show'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/product']], [], [], []],
    'app_product_edit' => [['id'], ['_controller' => 'App\\Controller\\ProductController::edit'], [], [['text', '/edit'], ['variable', '/', '[^/]++', 'id', true], ['text', '/product']], [], [], []],
    'app_product_delete' => [['id'], ['_controller' => 'App\\Controller\\ProductController::delete'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/product']], [], [], []],
    'App\Controller\ProductController::index' => [[], ['_controller' => 'App\\Controller\\ProductController::index'], [], [['text', '/product/']], [], [], []],
    'App\Controller\ProductController::new' => [[], ['_controller' => 'App\\Controller\\ProductController::new'], [], [['text', '/product/new']], [], [], []],
    'App\Controller\ProductController::show' => [['id'], ['_controller' => 'App\\Controller\\ProductController::show'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/product']], [], [], []],
    'App\Controller\ProductController::edit' => [['id'], ['_controller' => 'App\\Controller\\ProductController::edit'], [], [['text', '/edit'], ['variable', '/', '[^/]++', 'id', true], ['text', '/product']], [], [], []],
    'App\Controller\ProductController::delete' => [['id'], ['_controller' => 'App\\Controller\\ProductController::delete'], [], [['variable', '/', '[^/]++', 'id', true], ['text', '/product']], [], [], []],
];

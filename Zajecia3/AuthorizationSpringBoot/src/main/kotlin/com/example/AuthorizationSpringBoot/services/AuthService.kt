package com.example.AuthorizationSpringBoot.services

object AuthService {
    fun login(username: String, password: String): String {
        if (username == "admin" && password == "admin") {
            return "Logged in successfully"
        } else {
            return "Wrong username or password"
        }
    }
}
package com.example.AuthorizationSpringBoot.services

import org.springframework.stereotype.Service

@Service
object AuthService {
    fun login(username: String, password: String): String {
        return if (username == "admin" && password == "admin") {
            "Logged in successfully"
        } else {
            "Wrong username or password"
        }
    }
}
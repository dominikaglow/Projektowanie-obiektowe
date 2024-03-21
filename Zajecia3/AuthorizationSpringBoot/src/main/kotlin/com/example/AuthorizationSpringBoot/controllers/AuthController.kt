package com.example.AuthorizationSpringBoot.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/users")
class AuthController {

    data class users(val id: Int, val name: String)

    @GetMapping
    fun getUsers(): List<users> {
        return listOf(
            users(1, "John"),
            users(2, "Jane"),
            users(3, "Doe")
        )
    }
}
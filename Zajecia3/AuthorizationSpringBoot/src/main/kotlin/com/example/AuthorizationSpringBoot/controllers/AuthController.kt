package com.example.AuthorizationSpringBoot.controllers

import com.example.AuthorizationSpringBoot.services.AuthService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class AuthController {

    @Autowired
    private lateinit var authService: AuthService

    @PostMapping("/login")
    fun login(@RequestBody req: LoginRequest): String {
        val username = req.username
        val password = req.password

        return authService.login(username, password)
    }

}

data class LoginRequest(val username: String, val password: String)
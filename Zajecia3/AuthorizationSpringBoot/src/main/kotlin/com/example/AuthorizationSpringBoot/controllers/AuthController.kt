package com.example.AuthorizationSpringBoot.controllers

import com.example.AuthorizationSpringBoot.services.AuthService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
class AuthController {


    @PostMapping("/login")
    fun login(@RequestBody req: LoginRequest): String {
        val username = req.username
        val password = req.password

        return AuthService.login(username, password)
    }

}

data class LoginRequest(val username: String, val password: String)
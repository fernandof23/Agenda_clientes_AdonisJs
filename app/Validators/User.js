'use strict'

class User {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }

  get messages() {
    return {
      'username.required': 'You must provide a username.',
      'email.required': 'You must provide a valid email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password'
    }
  }
}

module.exports = User

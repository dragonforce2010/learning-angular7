import { CanActivate } from "@angular/router";

export class LoginGuard implements CanActivate {
    canActivate() {
        let logedIn = Math.random() > 0.5
        if (!logedIn) {
            console.log('User has not logged in yet! Please login first!')
            return false
        }
        console.log('User logged in!')
        return true
    }
}
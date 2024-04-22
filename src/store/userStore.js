import {makeObservable, action, observable, computed} from "mobx"

export default class UserStore{
    user = {}
    isAuth = false
    constructor(){
        makeObservable(this,{
            user: observable,
            isAuth : observable,
            setAuth: action,
            setUser: action,
            checkAuth: computed,
            getUser: computed
            }
        )
    }
    setAuth(bool){
        this.isAuth=bool
    }
    setUser(user1){
        if (user1 && typeof user1 === 'object') {
            for (const key in user1) {
                if (Object.prototype.hasOwnProperty.call(user1, key)) {
                    this.user[key] = user1[key];
                }
            }
        }
    }
    getAuth(){
        return this.isAuth
    }
    getUser(){
        return this.user
    }
}
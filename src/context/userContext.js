import {makeObservable, action, observable, computed} from "mobx"

export default class UserStore{
    user = {}
    avatar = {}
    isAuth = false
    constructor(){
        makeObservable(this,{
            user: observable,
            isAuth : observable,
            avatar: observable,

            setAuth: action,
            setUser: action,

            getAuth: action,
            getUser: action,

            setAvatar: action,
            getAvatar: action
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
    setUser(user1){
        this.user=user1
    }
    getAuth(){
        return this.isAuth
    }
    getUser(){
        return this.user
    }
    setAvatar(avatar){
        this.avatar = avatar
    }
    getAvatar(){
        return this.avatar
    }
}
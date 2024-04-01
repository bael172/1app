import {MakeObservable, action, observable, computed} from "mobx"

export default class UserStore{
    user = {}
    constructor(){
        this.isAuth
        MakeObservable(this,{
            user: observable,
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
    setUser({user1}){
        Object.assign(this.user,user1)
        //or 
        /*
        for(let key in user1){
            user[key]=user1[key]
        }
        */
    }
    checkAuth(){
        return this.isAuth
    }
    getUser(){
        return this.user
    }
}
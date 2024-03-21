import {makeAutoObservable, makeObservable, observable, computed, action, flow} from "mobx"

export default class UserStore{
    constructor(){
        this.isAuth = true
        this.user = {}
        
        makeObservable (this,{
            user: observable,
            setIsAuth: action,
            setUser: action,
            getisAuth: action,
            getuser: action
        })
        
       //makeAutoObservable()
    }
    setIsAuth(bool){
        this.isAuth = bool
    }
    setUser({user1}){
        this.user=user1
        /*
        for(let key in this.user){
            this.user[key]=user1[key]
        }
        */
        //Object.assign(this.user,user1)
    }
    getisAuth(){
        return this.isAuth
    }
    getuser(){
        return this.user
    }
}
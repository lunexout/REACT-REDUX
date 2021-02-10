import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import firebase from './../../firebase'
const LoginStudent = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const CheckAuth = async () => {
        // console.log(1);
        if(login.length >= 11){
            console.log(login);
            return await firebase
            .collection('Students')
            .doc(login)
            .get()
            .then(doc => {
                const user = doc.data();
                console.log(doc.data());
                if(user.password === password){
                    alert('succes login')
                    history.push("/students")
                }else {
                    alert('paroli an logini arasworia')
                }
            })
            .catch(err => alert('paroli an logini arasworia'))
            // .onSnapshot(querySnapshot => {
            //     querySnapshot.docs.map(doc => {
            //         console.log( doc.data() )
            //     })
            // })
        }else if(login.length <= 10){
            alert('logini unda sheicavdes minimum 11 simbolos')
        }else if(password.length < 6){
            alert('paroli unda sheicavdes 6 simbolos')
        }else {

        }
        // .catch(err=>{alert(err)})
    }

    return(
        <>
        <div className="container mt-5">
            <h1>STUDENT</h1>
            <input onChange={(e)=>{setLogin(e.target.value)}} 
            value={login} type="text" placeholder="login"></input><br/>
            <input onChange={(e)=>{setPassword(e.target.value)}}
            value={password} className="mt-2" type="password" placeholder="password"></input><br/>
            <button onClick={CheckAuth} className="mt-2 btn btn-success">LOGIN</button>
        </div>
        </>
    );
}
export default LoginStudent;
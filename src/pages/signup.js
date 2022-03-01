import axios from "axios"
import { useState } from "react"
import { Button } from "react-bootstrap";

export default function SignUp(){
    const [email ,setEmail] = useState(null);
    const [password ,setPassword] =useState(null);
    const [username ,setUsername] =useState(null);


    const [loading ,setloading] = useState( false);
    const [error ,seterror] = useState(null);
    const [data , setdata] = useState(null);

    const SignUphand = async () => {
        try {
            seterror(false);
            setloading(true);
            console.log({
                email:email,
                password:password,
                username:username,
            })
            const result = await axios({
                url:"https://learning-task4.herokuapp.com/auth/signup",
                method:"POST",
                data:{
                    email:email,
                    password:password,
                    username:username,
                }

            });
            console.log(result);
            window.location.href="/login";
            setdata(result);
            setloading(false);
            
        } catch (error) {
            console.log(error);
            seterror(true);
            setloading(false);
        }
    };
    return(
        <div>
            <input placeholder="username" type={"text"} onChange ={(e)=> setUsername (e.target.value)}/>
            <input placeholder="Email" type={"email"} onChange ={ (e)=> setEmail(e.target.value)}/>
            <input placeholder="password" type={"password"} onChange= {(e)=>setPassword(e.target.value) }/>
            <Button onClick={SignUphand}> signup</Button>
            {loading && <h1>loading....</h1>}
            {error && <h3>something went wrong.....</h3>}
            {data && <h3>Done....</h3>}
            
        </div>
    )
}
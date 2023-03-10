import {
    Box,
    FormControl,
    Input,
    Text,
    Heading,
    Button
} from "@chakra-ui/react";
import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Auth_Sign_UP } from "../../Redux/AuthReducer/Action";


const styles = {
    input: {
        width: "100%",
        padding: "7px 14px",
        borderRadius: "10px",
        mb: "35px",
        border: "1px solid rgb(230,230,230)",
        display: "block",
    }
}

export default () => {
    const [formData, setFormData] = useState({email:"", password:""});
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const emailInput = useRef(null);
    const passInput = useRef(null);

    const handleEmailChange = ({target}) => {
        setFormData((prev)=>({
            ...prev,
            email:target.value
        }))
        target.style.borderColor='rgb(200,200,200)';
    }
    const handlePasswordChange = ({target}) => {
        setFormData((prev)=>({
            ...prev,
            password:target.value
        }))
        target.style.borderColor='rgb(200,200,200)';
    }
    const onSuccess = () => {
        alert('Account Created Successfully');
        navigator('/signin')
    }
    const onError = () => {
        alert('Something went wrong please try again!');
    }
    const handleSubmit = () =>{
        if(formData.email===''){
            emailInput.current.focus();
            emailInput.current.style.borderColor='red';
            return;
        }else{

        }
        if(formData.password===''){
            passInput.current.focus();
            passInput.current.style.borderColor='red';
            return;
        }
        dispatch(Auth_Sign_UP(formData, onSuccess, onError));
    }
    return <Box p='10px 0' pt='55px' backgroundColor={'rgb(245,245,245)'} height='100vh'>
        <Heading textAlign={'center'} w='fit-content' m='0px auto 55px' p='10px 75px' borderBottom={'2px solid skyblue'}>SIGN UP</Heading>
        


        <FormControl >
            <Box w={['550px']} m='15px auto' mt='50px' border='1px solid rgb(200,200,200)' backgroundColor={'#fff'} textAlign={'center'} p='75px' borderRadius={'20px'} boxShadow='xl'>


                <Input
                    type='text'
                    placeholder='Enter Email Address'
                    value={formData.email}
                    onChange={handleEmailChange}
                    {...styles.input}
                    ref={emailInput}
                    
                />

                <Input
                    type='text'
                    placeholder='Enter Password'
                    value={formData.password}
                    onChange={handlePasswordChange}
                    {...styles.input}
                    ref={passInput}
                />


                <Button colorScheme='blue' onClick={handleSubmit}>Create Account</Button>
            </Box>
        </FormControl>
        <Text textAlign={'center'} mt='55px'>
            Already Have Account? <Link to='/signin' style={{color:"blue", textDecoration:"underline"}}>Sign In</Link>
        </Text>
    </Box>
}
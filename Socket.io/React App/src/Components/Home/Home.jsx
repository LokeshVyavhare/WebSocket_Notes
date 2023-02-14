import { Box } from '@chakra-ui/react';
import style from './style.module.css';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default () => {
    const data = useSelector(store=>store.auth);
    const {isAuth, loading, error} = data;
    const navigator = useNavigate();

    useEffect(()=>{
        if(!isAuth){
            return navigator('/signin');
        }
    }, [])


    return <Box className={style.parent}>
        {isAuth?<><Navbar/>
        <Dashboard/></>:""}
    </Box>
}
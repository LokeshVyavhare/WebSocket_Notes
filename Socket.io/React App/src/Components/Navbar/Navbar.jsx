import { Box, Button } from '@chakra-ui/react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import { Auth_Sign_out } from '../../Redux/AuthReducer/ActionTypes';
import { useDispatch } from 'react-redux';

export default () => {
    const dispatch = useDispatch();
    return <Box className={style.parent} display="flex" m="0" p="15px 55px" backgroundColor={'skyblue'} justifyContent="space-between" alignItems={'center'}>
        <Box title='Dashboard' p='10px 20px' color='#fff' fontSize={'25px'} fontWeight='700' className={style.a} >
            <Link to='/'><RxDashboard/></Link>
        </Box>
        <Box title="Logout" p='10px 20px' color='#fff' fontSize={'25px'} fontWeight='700' className={style.a} >
            <Link to='/signin' onClick={()=>{
                dispatch(Auth_Sign_out());
            }}><FiLogOut/></Link>
        </Box>

    </Box>
}
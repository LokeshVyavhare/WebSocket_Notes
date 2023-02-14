import { 
    Box,
    Heading,
    Button,
    Input
} from "@chakra-ui/react"
import { Droppable } from "react-beautiful-dnd"
import BugTask from "../BugTask/BugTask"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UpdateBugsData } from "../../../Redux/BugsReducer/Action"

export default ({heading, data, color, columnId}) => {
    const {bugs} = data;
    const [showModal, setShowModal] = useState(false);
    const [modalValue, setModalValue] = useState('');
    const data2 = useSelector((store)=>store.bugs);
    const dispatch = useDispatch();

    const handleAddBug = () => {
        if(data.bugs.length<=4){
            data2[columnId].bugs.push({bug:modalValue, id:data.bugs.length});
        }else{
            alert('Maximum tasks in stack limit reached!');
            setShowModal(false)
            return
        }
        console.log(data2[columnId])
        setShowModal(false)
        dispatch({type:UpdateBugsData, payload:{...data2}});
    }
    const handleDelete = (columnId,index) => {

        data2[columnId].bugs.splice(index, 1);
        dispatch({type:UpdateBugsData, payload:{...data2}});
        alert('Bugs Deleted');

    }
    return <Box p='15px 20px' border={'1px solid grey'} w='24%' textAlign={'center'} position='relative' borderRadius={'25px'}>

        <Button colorScheme={'purple'} size='sm' m='auto' w='50%' onClick={()=>{
            setShowModal(!showModal);
        }}>{showModal?"Cancel":"Report Bug"}</Button>

        {showModal?<Box backgroundColor={'#fff'} position='absolute' top='50px' w='90%' h='150px' border={'1px solid black'} p='20px 15px' borderRadius='20px'>

            <Input placeholder='Add Bug' border={'1px solid rgb(220,220,220)'} value={modalValue} onChange={({target})=>{
                setModalValue(target.value)
            }} />
            <Button onClick={handleAddBug}>Add Bug</Button>

        </Box>:""}
        <Heading fontSize={'23px'} borderRadius='15px' backgroundColor={color[0]} w='100%' p='7px 14px' m='15px auto'>{heading}</Heading>
        <Droppable droppableId={columnId}>
            {(provided)=>{
                return (<Box {...provided.droppableProps} ref={provided.innerRef} height='350px'>
                    {bugs.map((task, index)=> <BugTask key={columnId+index}
                       data={{columnId, color, task:task.bug, bugId:task.id , index}}
                        methods={{handleDelete}}/> )}
                    {provided.placeholder}
                    </Box> ) 
            }}
        </Droppable>

    </Box>

}

/*

*/
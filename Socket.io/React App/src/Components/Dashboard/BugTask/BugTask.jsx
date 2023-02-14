import {
    Box,
    Heading,
    Button,
    Text
} from "@chakra-ui/react"
import { Draggable } from "react-beautiful-dnd";
import {RiDeleteBin5Line} from 'react-icons/ri'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { UpdateBugsData } from "../../../Redux/BugsReducer/Action"

export default ({ data, methods }) => {
    const {handleDelete} = methods
    const { columnId, index, task, color, bugId } = data;
    const data3 = useSelector((store)=>store.bugs);
    const dispatch = useDispatch();
    return <Draggable
                draggableId={columnId+'-'+index}
                index={index}
    >
        {(provided)=>{
                return (<Box
                    w='100%' 
                    p='4px 10px' 
                    m='10px auto' 
                    borderRadius={'10px'}
                    display='flex'
                    justifyContent='space-between'
                    backgroundColor={color[1]}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    >
                <Text>{task}</Text>
                <Text fontSize={'20px'} onClick={()=>{
                    // handleDelete(columnId, index)
                }}><RiDeleteBin5Line/></Text>
            </Box> ) 
            }}
        
    </Draggable>
}
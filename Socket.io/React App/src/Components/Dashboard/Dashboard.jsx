import { Box } from '@chakra-ui/react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {DragDropContext} from 'react-beautiful-dnd'
import BugColumn from './BugColumn/BugColumn';
import { UpdateBugsData } from '../../Redux/BugsReducer/Action';

export default () => {
    const data = useSelector((store)=>store.bugs);
    const {critical, major, medium, low} = data;
    const dispatch = useDispatch();

    const handleDragEnd = ({source, destination, draggableId}) => {

        if(!source || !destination ){
            return;
        }

        if(source.droppableId === destination.droppableId && source.index === destination.index ){
            return;
        }

        let previous = data[source.droppableId];
        let next=data[destination.droppableId];



        
        const item=previous.bugs[source.index];
        if(next.bugs.length<=4){

            previous.bugs.splice(source.index, 1);
            next.bugs.splice(destination.index, 0, item);
    
            dispatch({type:UpdateBugsData, payload:{...data}});
        }else{
            alert('Maximum tasks in stack limit reached!');
            return
        }

        


    }

    return <Box className={style.parent} m='auto' display='flex' justifyContent={'space-evenly'} mt='50px' width={'90%'} >
        <DragDropContext onDragEnd={handleDragEnd}>
            <BugColumn heading="Critical Severity" data={critical} color={['red', 'pink']} columnId={critical.id}/>
            <BugColumn heading="Major Severity" data={major} color={['orange', 'yellow']} columnId={major.id}/>
            <BugColumn heading="Medium Severity" data={medium} color={['blue', 'skyblue']} columnId={medium.id}/>
            <BugColumn heading="Low Severity" data={low} color={['green', 'greenyellow']} columnId={low.id}/>
        </DragDropContext>
    </Box>
}
import DoneList from "./DoneList";
import TodoContents from "./TodoContents";
import Todosidebar from './TodoSideBar';
import styles from '../style.module.css'
import { Divider } from '@mui/material';

export default function MainTodo(){
    return (<div className={styles.mainFlex}>
        <div className={styles.sideBarComp}>
        <Todosidebar ></Todosidebar>
        </div>
        <Divider orientation="vertical" flexItem />
        <div  className={styles.detailComp}>
        <TodoContents></TodoContents> 
        </div>
        <Divider orientation="vertical" flexItem />
        <div className={styles.doneComp}>
        <DoneList ></DoneList>
        </div>
    </div>)
}
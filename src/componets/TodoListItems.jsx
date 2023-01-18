import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useState } from 'react';
export default function TodoListItems({eachItem,lists,setTodoList}){
    // const label = { inputProps: { 'aria-label': 'primary checkbox' } };

    const [checkedvalue,setChecked] = useState(false);

    const checkcedCheckBox=(args)=>{
        setChecked(args.target.checked);
        console.log(args.target)
        let index = lists.indexOf(eachItem);
        if(index !== -1){
            lists.splice(index,1);
            setTimeout(() => {
                setTodoList([...lists]);
            }, 300);
           
        }
    }
    return (<div>
          <List>
            <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
            <Checkbox checked={checkedvalue} onChange={checkcedCheckBox}/>
            </ListItemIcon>
            <ListItemText>{eachItem}</ListItemText>
            </ListItemButton>
            </ListItem>
        </List>
    </div>)
}
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export default function ListItemComponet ({each}){

    return (
        <List>
            <ListItem disablePadding>
            {/* <ListItemButton> */}
            <ListItemText> {each}</ListItemText>
            {/* </ListItemButton> */}
            </ListItem>
        </List>
    )
}
import { Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import Box from "@mui/material/Box"
import styles from "../style.module.css"
export default function Todosidebar(){
    return (<div >
      <Box className={styles.sideBarLayout}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Today"></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>
      </Box>

    </div>)
}
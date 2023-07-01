import { List, ListItem, ListItemText, Skeleton } from '@mui/material'

export function SkeletonList () {
  return (
    <>
      <Skeleton>
        <List>
          <ListItem>
            <ListItemText primary='lorem' secondary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis nobis harum doloribus nam quis facilis vitae? Accusamus qui provident necessitatibus, ut at aliquam sapiente aut minima, facilis consectetur quidem.' />
          </ListItem>
        </List>
      </Skeleton>
      <Skeleton>
        <List>
          <ListItem>
            <ListItemText primary='lorem' secondary='Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem reiciendis nobis harum doloribus nam quis facilis vitae? Accusamus qui provident necessitatibus, ut at aliquam sapiente aut minima, facilis consectetur quidem.' />
          </ListItem>
        </List>
      </Skeleton>
    </>
  )
}

import React, {useEffect, useState} from 'react';
import './App.css';
import {Card, Grid, List, ListItem, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {useGetAllCoursesQuery} from "./services/courses";
import CardHeader from '@mui/material/CardHeader';


function App() {
const [courses, setCourses] = useState([])
    const {data, error, isLoading} = useGetAllCoursesQuery();
    useEffect(()=>{
    // @ts-ignore
        setCourses(data?.courses)
},[])
    return (
        <>
            {
                !isLoading ? (
                        <Grid container spacing={2} justifyContent={"center"} >
                        <Grid item xs={3}>
                            <Card>
                                <CardHeader title=" List of Courses" />
                                        <List>
                                            {
                                                // @ts-ignore
                                                courses?.map((c:any)=>
                                            <ListItem secondaryAction={
                                                <>
                                                    <IconButton onClick={()=>console.log("my delete action...")} edge="end" aria-label="delete">
                                                        <EditIcon color={"primary"} />
                                                    </IconButton>
                                                    <IconButton onClick={()=>console.log("my delete action...1")} edge="end" aria-label="delete">
                                                        <DeleteIcon color={"error"} />
                                                    </IconButton>
                                                </>
                                            }>
                                                <ListItemText key={c._id}>{c.name}</ListItemText>
                                            </ListItem>
                                                )
                                            }
                                        </List>

                            </Card>
                        </Grid>
                    </Grid>
                ) :(<>Loading...</>)
            }
        </>

  );
}

export default App;

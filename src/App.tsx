import React from 'react';
import './App.css';
import {Card, Dialog, Grid, List, ListItem, ListItemText} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import {useGetAllCoursesQuery} from "./services/courses";
import CardHeader from '@mui/material/CardHeader';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Course} from "./models/Course";

function App() {
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    const [editItem, setEditItem] = React.useState<Course>();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleOpenEdit = (obj:any)=> {
        setEdit(true);
        setEditItem(obj)
    };

    const handleClose = () => {
        setOpen(false);
        setEdit(false);
    };

    const {data = [], error, isLoading} = useGetAllCoursesQuery();
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
                                                data?
                                                        // @ts-ignore
                                                        data.courses.map((c:any)=>
                                                            <ListItem secondaryAction={
                                                                <>
                                                                    <IconButton onClick={(e)=>handleOpenEdit(c)} edge="end" aria-label="delete">
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
                                                    : "No data Found!"
                                            }
                                        </List>
                                <IconButton  onClick={handleClickOpen} edge="end" aria-label="add">
                                    <AddIcon color={"primary"} /> <span>Add Course</span>
                                </IconButton>
                            </Card>
                        </Grid>
                    </Grid>
                ) :(<>Loading...</>)
            }
            {error? <p>There is an error, please check</p> : ""}

            {/*Add Course DialogActions*/}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Course</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        fullWidth
                        variant="standard"
                        autoComplete={"off"}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="units"
                        label="Units"
                        type="number"
                        fullWidth
                        variant="standard"
                        autoComplete={"off"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Add</Button>
                </DialogActions>
            </Dialog>
            {/*End Add Course DialogActions*/}

            {/*Edit DialogActions*/}
            <Dialog
                open={edit} onClose={handleClose}>
                <DialogTitle>Update Course</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        defaultValue={editItem?.name}
                        fullWidth
                        variant="standard"
                        autoComplete={"off"}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="units"
                        label="Units"
                        type="number"
                        defaultValue={editItem?.units}
                        fullWidth
                        variant="standard"
                        autoComplete={"off"}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Update</Button>
                </DialogActions>
            </Dialog>
            {/*End Edit DialogActions*/}
        </>
  );
}

export default App;

// In your TodoApp.js file
import React, { useEffect } from 'react';
import { useGlobalState } from '../utils/GlobalUtils';
import { Button, TextField, List, ListItem, Checkbox, IconButton, ListItemIcon, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';

const StyledListItem = styled(ListItem)({
    margin: '8px',
    padding: '8px',
    color: '#000000',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between', // Align items to the right
});

const useStyles = makeStyles((theme) => ({
    textField: {
        marginRight: '8px',
        flex: 1,
        borderRadius: '8px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgba(3, 137, 137)',
            },
            '&:hover fieldset': {
                borderColor: 'rgba(3, 137, 137)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(3, 137, 137)',
            },
        },
    },
}));

function TodoApp({ onPageChange }) {
    const { todoList, setGlobalState } = useGlobalState();
    const [newTodoText, setNewTodoText] = React.useState("");
    const [editIndex, setEditIndex] = React.useState(null);
    const [editedText, setEditedText] = React.useState("");
    const classes = useStyles();

    useEffect(() => {
        if (editIndex !== null) {
            setEditedText(todoList[editIndex].text);
        }
    }, [editIndex, todoList]);

    const handleAddTodo = () => {
        if (newTodoText.trim() !== "") {
            const updatedTodoList = [...todoList, { text: newTodoText, completed: false }];
            setGlobalState({ todoList: updatedTodoList });
            setNewTodoText("");
        }
    };

    const handleUpdateTodo = (index, updatedTodo) => {
        const updatedList = [...todoList];
        updatedList[index] = updatedTodo;
        setGlobalState({ todoList: updatedList });
        setEditIndex(null);
        setEditedText("");
    };

    const handleDeleteTodo = (index) => {
        const updatedList = [...todoList];
        updatedList.splice(index, 1);
        setGlobalState({ todoList: updatedList });
        setEditIndex(null);
        setEditedText("");
    };

    console.log('Render TodoApp');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: 'linear-gradient(180deg, #038a8a, #020112)' }}>
            <List style={{ flex: 1, marginBottom: '100px', marginLeft: '10%', marginRight: '10%', borderRadius: '8px' }}>
                {todoList.map((todo, index) => (
                    <StyledListItem key={index} style={{ backgroundColor: 'rgba(3, 137, 137)', border: '2px solid rgb(2, 94, 99)', borderColor: 'rgb(2, 94, 99)', borderRadius: '8px' }}>
                        <ListItemIcon>
                            <Checkbox
                                checked={todo.completed}
                                onChange={() => handleUpdateTodo(index, { ...todo, completed: !todo.completed })}
                                style={{ color: todo.completed ? '#03474f' : '03474f' }}
                            />
                        </ListItemIcon>
                        {editIndex === index ? (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                                {/* Updated styling for the text input */}
                                <TextField
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    className={classes.textField}
                                />
                                {/* Updated styling for the checkmark button */}
                                <IconButton onClick={() => handleUpdateTodo(index, { ...todo, text: editedText })} style={{ color: '#4caf50', marginLeft: '8px' }}>
                                    <CheckIcon />
                                </IconButton>
                            </div>
                        ) : (
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Typography
                                        style={{
                                            textDecoration: todo.completed ? 'line-through' : 'none',
                                            color: todo.completed ? 'rgb(3, 105, 109)' : 'black'
                                        }}
                                    >
                                        {todo.text}
                                    </Typography>
                                </div>
                                <div>
                                    <IconButton onClick={() => setEditIndex(index)} style={{ color: '#03474f' }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => handleDeleteTodo(index)} style={{ color: '#03474f' }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </div>
                            </div>
                        )}
                    </StyledListItem>
                ))}
            </List>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    position: 'fixed',
                    width: '-webkit-fill-available',
                    bottom: '0',
                    backgroundColor: 'rgb(2, 20, 35)',
                    border: '3px solid rgb(2, 94, 99)',
                    borderColor: 'rgb(2, 94, 99)',
                    borderRadius: '8px'
                }}>
                <TextField
                    label="Nieuw TODO toevoegen"
                    variant="outlined"
                    className={classes.textField}
                    InputLabelProps={{
                        style: {
                            color: 'rgba(3, 136, 137)',
                        },
                    }}
                    inputProps={{
                        style: {
                            color: 'rgba(3, 136, 137)',
                        },
                    }}
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                />

                <IconButton
                    variant="contained"
                    color="primary"
                    onClick={handleAddTodo}
                    style={{
                        backgroundColor: 'rgba(3,136, 137)',
                        color: 'rgba(0,0,0)',
                        marginLeft: '8px', // Add some space between the text field and the icon button
                    }}
                >
                    <AddIcon />
                </IconButton>
            </div>
        </div>
    );
}
export default TodoApp;

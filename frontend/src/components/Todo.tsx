import { Container, Grid, Checkbox, Typography, IconButton } from "@mui/material";
import LensOutlinedIcon from '@mui/icons-material/LensOutlined';
import LensIcon from '@mui/icons-material/Lens';
import DeleteIcon from '@mui/icons-material/Delete';

// interface TodoProps {
//     id: number;
//     text: string;
//     completed: boolean;
// }

export default function Todo() {
    return (
        <div>
            <Container sx={{
                backgroundColor: 'lightblue',
                borderRadius: '7px',
                p: 1,
                m: 1,
                width: '60%',
                marginX: 'auto',
            }}>
                <Grid container>
                    <Grid item xs={2}>
                        <Checkbox
                            icon={<LensOutlinedIcon />}
                            checkedIcon={<LensIcon />}
                            sx={{
                                margin: 'auto',
                                p: 1.5,
                                color: 'gray',
                            }}
                            // sx={{
                            //     color: 'black',
                            //     '&.Mui-checked': {
                            //         color: 'green',
                            //     },
                            // }
                            onChange={(e) => {
                                console.log(e.target.checked);
                            }}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="h6" sx={{
                            color: 'black',
                            textDecoration: 'none',
                            // '&:hover': {
                            //     textDecoration: 'line-through',
                            // },
                            margin: 'auto',
                            p: 1,
                        }}>This is a todo</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="delete">
                            <DeleteIcon sx={{
                                color: 'red',
                                margin: 'auto',
                                p: 1,
                            }}/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
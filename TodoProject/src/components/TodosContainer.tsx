import { Container, Typography } from '@mui/material';
import Todo from './Todo';

export default function TodosContainer() {
    return (
        <Container>
            <Typography variant="h2" align="center" sx={{
                margin: 'auto',
                color: 'gray',
                p: 1,
                m: 1,
            }}>todos</Typography>
            <Todo />
            <Todo />
        </Container>
    );
};
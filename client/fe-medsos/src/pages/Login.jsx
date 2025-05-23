import CssBaseline from '@mui/material/CssBaseline'
import { Box, Button, FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom'
import { Card, SignInContainer } from '../utils/style'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchMajor } from '../redux/action/majorAction';



const Login = () => {
    const major = useSelector(root => root?.major)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMajor())
    }, [])

    return (
        <div>
            <CssBaseline enableColorScheme />
            <SignInContainer direction="column" justifyContent="space-between">
                <Card variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            gap: 2,
                        }}
                    >
                        <FormControl>
                            <FormLabel htmlFor="username">Username</FormLabel>
                            <TextField
                                id="Username"
                                type="text"
                                name="Username"
                                placeholder="Your username"
                                autoComplete="username"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            />
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <TextField
                                id="Password"
                                type="password"
                                name="Password"
                                placeholder="Your password"
                                autoComplete="Password"
                                autoFocus
                                required
                                fullWidth
                                variant="outlined"
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        >
                            Sign in
                        </Button>
                        <center>
                            <Link to="/register">
                                Don't have an account
                            </Link>
                        </center>
                    </Box>
                </Card>
            </SignInContainer>
        </div>
    )
}



export default Login
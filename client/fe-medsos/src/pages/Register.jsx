import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { CardRegister, SignInContainer as SignUpContainer } from "../utils/style";
import { useForm } from "react-hook-form"


const Register = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (value) => console.log(value)

    return (
        <>
            <CssBaseline enableColorScheme />
            <SignUpContainer direction="column" justifyContent="space-between">
                <CardRegister variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
                    >
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            gap: 2,
                        }}
                    >
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                        >
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="username">username</FormLabel>
                                    <TextField
                                        // error={emailError}
                                        // helperText={emailErrorMessage}
                                        id="username"
                                        type="username"
                                        name="username"
                                        placeholder="username"
                                        autoComplete="text"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        {...register('username')}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="password">Password</FormLabel>
                                    <TextField
                                        // error={passwordError}
                                        // helperText={passwordErrorMessage}
                                        name="password"
                                        placeholder="••••••"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        {...register('password')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <TextField
                                        // error={passwordError}
                                        // helperText={passwordErrorMessage}
                                        name="email"
                                        placeholder="email"
                                        type="email"
                                        id="email"
                                        autoComplete="email"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        {...register('email')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="firstName">firstName</FormLabel>
                                    <TextField
                                        // error={passwordError}
                                        // helperText={passwordErrorMessage}
                                        name="firstName"
                                        placeholder="firstName"
                                        type="text"
                                        id="firstName"
                                        autoComplete="firstName"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        {...register('firstName')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6}>
                                <FormControl fullWidth>
                                    <FormLabel htmlFor="lastName">lastName</FormLabel>
                                    <TextField
                                        // error={passwordError}
                                        // helperText={passwordErrorMessage}
                                        name="lastName"
                                        placeholder="lastName"
                                        type="text"
                                        id="lastName"
                                        autoComplete="lastName"
                                        autoFocus
                                        required
                                        fullWidth
                                        variant="outlined"
                                        {...register('lastName')}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={6} style={{ marginTop: 23 }}>
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label">class</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="class"
                                        {...register('classes')}
                                    >
                                        <MenuItem value={"X"}>X</MenuItem>
                                        <MenuItem value={"XI"}>XI</MenuItem>
                                        <MenuItem value={"XII"}>XII</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid size={6} style={{ marginTop: 10 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">major</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="major"
                                        {...register('majors')}
                                    >
                                    {
                                        major?.data?.map((m, i) => <MenuItem
                                        key={i} value={m?.name}
                                        >{m?.name}</MenuItem>)
                                    }  
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={6} style={{ marginTop: 10 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={age}
                                        label="major"
                                        {...register('gender')}
                                    >
                                        <MenuItem value={"Man"}>man</MenuItem>
                                        <MenuItem value={"Women"}>women</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                        // onClick={validateInputs}
                        >
                            Sign up
                        </Button>
                        <center>
                            <Link to={"/login"}>have account</Link>
                        </center>
                    </Box>
                </CardRegister>
            </SignUpContainer>
        </>
    );
};

export default Register;

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Grid } from '@mui/joy';
import { Button, Container, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BoxLogin, ContainerLogin } from '../../../Context/AppContext';


export type LoginData = {
    email: string;
    password: string;
    confirmPassword: string;
}

const Registration = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState<LoginData>({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const passwordTest = () => {
        const result = loginData.password === loginData.confirmPassword
        setPasswordIsValid(!result)

    }
    return (
        <Container sx={ContainerLogin}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={BoxLogin}
            >
                <Typography variant="h5" gutterBottom sx={{
                    color: '#555'
                }}>
                    Registration:
                </Typography>
                <TextField
                    required
                    label="Email"
                    onChange={(e) => {
                        setLoginData(
                            {
                                ...loginData,
                                email: e.target.value
                            }
                        )
                    }}
                />
                <FormControl error={passwordIsValid} sx={{ m: 1, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => {
                            setLoginData(
                                {
                                    ...loginData,
                                    password: e.target.value
                                }
                            )
                        }}
                        onBlur={() => passwordTest()}
                        endAdornment={
                            <InputAdornment position="end" >
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl error={passwordIsValid} sx={{ m: 1, width: '40ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        onChange={(e) => {
                            setLoginData(
                                {
                                    ...loginData,
                                    confirmPassword: e.target.value
                                }
                            )
                        }
                        }
                        onBlur={() => passwordTest()}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label={
                                        showPassword ? 'hide the password' : 'display the password'
                                    }
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="confirm password"
                    />
                    {passwordIsValid && <FormHelperText id="outlined-adornment-password">The passwords provided do not match.</FormHelperText>}
                </FormControl>

                <Grid
                    container
                    sx={{
                        margin: '0 0 0 auto',
                    }}
                >
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                        }}
                        onClick={() => {
                            navigate('/Sing');
                        }} >Sing in</Button>
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            textTransform: 'none',
                            margin: '0 10px',
                        }}
                        onClick={() => {
                            navigate('/Home');
                        }} >Back to Home Page</Button>
                    <Button
                        disabled={passwordIsValid || loginData.password.length === 0 || loginData.email.length === 0}
                        disableRipple
                        size="small"
                        variant="contained"
                        onClick={() => {
                            alert(`login: ${loginData.email} password: ${loginData.password}`)
                        }
                        }
                        sx={{
                            textTransform: 'none',
                        }}
                    >
                        Submit
                    </Button>
                </Grid>
            </Box ></Container >

    )
}

export default Registration
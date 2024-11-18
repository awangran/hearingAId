import { useState } from "react";

import { Typography, Input, Button } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import NavbarComp from "../components/NavbarComp";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [clases, setClases] = useState()

  
  const navigate = useNavigate()

  const handleClases = (e) => {
    const input = e.target.value;
    const arrayValues = input.split(','); 
    setClases(arrayValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5555/signup',{name,email,password,clases})
    .then(res => {console.log(res)
    navigate('/login')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <NavbarComp />
    <section className="grid text-center h-screen items-center p-8">
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Crea una cuenta
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Ingresa un nombre, email y constraseña para registrarte. 
        </Typography>
        <form onSubmit={handleSubmit} className="mx-auto max-w-[24rem] text-left">
        <div className="mb-6">
            <label htmlFor="name">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Nombre
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              name="name"
              placeholder=""
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Contraseña
              </Typography>
            </label>
            <Input
              size="lg"
              name="password"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Clases (separadas por una coma)
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              name="name"
              placeholder=""
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={handleClases}
            />
          </div>
          <Button color="gray" type="submit" size="lg" className="mt-6" fullWidth>
            Registrate
          </Button>
          <div className="!mt-4 flex justify-end">
      
          </div>
          {/* 
          <Button
            variant="outlined"
            size="lg"
            className="mt-6 flex h-12 items-center justify-center gap-2"
            fullWidth
          >
            <img
              src={`https://www.material-tailwind.com/logos/logo-google.png`}
              alt="google"
              className="h-6 w-6"
            />{" "}
            sign in with google
          </Button>*/}
          <Typography
            variant="small"
            color="gray"
            className="!mt-4 text-center font-normal"
          >
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="font-medium text-gray-900">
              Log In
            </a>
          </Typography>
        </form>
      
      </div>
     
    </section>
    </>
  );
}

export default Login;
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export default function Note() {
    return (
      <Card className="mt-6 w-48">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            ISIS
          </Typography>
          <Typography>
            Notas de metodologías ágiles
          </Typography>
          <Typography>
            12 de Noviembre 2025
          </Typography>
        </CardBody>
      </Card>
    );
  }
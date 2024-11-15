import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  function NoteCard({ subject, description, date, onClick }) {
    return (
      <Card className="w-80 m-4">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {subject}
          </Typography>
          <Typography color="gray" className="mb-2">
            {date}
          </Typography>
          <Typography color="gray" className="mb-4">
            {description}
          </Typography>
          <Button color="lightBlue" variant="outlined" fullWidth onClick={onClick}>
            Ver Apuntes
          </Button>
        </CardBody>
      </Card>
    );
  }
  
  export default NoteCard;
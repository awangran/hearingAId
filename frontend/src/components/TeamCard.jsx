import {
    Card,
    CardBody,
    Avatar,
    IconButton,
    Typography,
  } from "@material-tailwind/react";
  
  
  function TeamCard({ img, name, title }) {
    return (
      <Card className="rounded-lg bg-[#FAFAFA]" shadow={false}>
        <CardBody className="text-center">
          <Avatar
            src={img}
            alt={name}
            variant="circular"
            size="xxl"
            className="mx-auto mb-6 object-top"
          />
          <Typography variant="h5" color="blue-gray" className="!font-medium text-lg">
            {name}
          </Typography>
          <Typography
            color="blue-gray"
            className="mb-2 !text-base !font-semibold text-gray-600"
          >
            {title}
          </Typography>
          
        </CardBody>
      </Card>
    );
  }
  
  
  const members = [
    {
      img: `https://i.imgur.com/fA6WArH.jpeg`,
      name: "Ashlee Yin",
      title: "ash@haid.com",
    },
    {
      img: `https://i.imgur.com/ZOa7iFo.jpeg`,
      name: "Pau Suso",
      title: "pau@haid.com",
    },
    {
      img: `https://i.imgur.com/qI6q8nw.jpeg`,
      name: "David Almanza",
      title: "david@haid.com",
    },
    {
      img: `https://i.imgur.com/Q4ie8qf.png`,
      name: "Daniel Rincon",
      title: "daniel@haid.com",
    },
    {
      img: `https://i.imgur.com/tQGNvxy.jpeg`,
      name: "Juan David Echeverry",
      title: "juan@haid.com",
    }
  ];
  
  export function TeamSection12() {
    return (
      <section className="min-h-screen mt-12 py-8 px-8 lg:py-12">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-28">
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-2 !text-2xl lg:!text-4xl"
          >
            Nuestro Equipo: Mas allá de Hearing-AId
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
             Somos un grupo de estudiantes comprometidos con la inclusión y la diversidad en el aprendizaje.
             Nuestro objetivo es crear la tecnología que independice y ayude a las personas que pueden 
             verse afectadas por sus discapacidades.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
    );
  }
  
  export default TeamSection12;
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
      img: `https://www.material-tailwind.com/img/avatar1.jpg`,
      name: "Ashlee Yin",
      title: "",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar2.jpg`,
      name: "Pau Suso",
      title: "",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar5.jpg`,
      name: "David Almanza",
      title: "",
    },
    {
      img: `https://www.material-tailwind.com/img/avatar4.jpg`,
      name: "Daniel Rincon",
      title: "",
    },
    {
      img: `https://i.imgur.com/tQGNvxy.jpeg`,
      name: "Juan David Echeverry",
      title: "",
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
            Nuestro Equipo: Mas allá de 
            Hearing-AId
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full !text-gray-500 max-w-4xl"
          >
            From visionary leadership to creative talent, and technical wizards, 
            each team member plays a pivotal role in delivering the exceptional 
            service and innovative solutions.
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
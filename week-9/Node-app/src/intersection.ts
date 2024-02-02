// types allow us to do intersection that means if we want to use the every property of multiple types or interfaces.
// like i have a interface of manager name and type of employee name and wanna to use the properties of both in teamlead type than we use type.

type Employe = {
    name: string;
    startDate: Date;
  };
  
  interface Manager  {
    name: string;
    department: string;
  };
  
  type TeamLead = Employe & Manager;
  
  const t: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
  
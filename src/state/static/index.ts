import { Person, Project, Task } from "../types";

export const defaultProjects: Project[] = [
  { id: "Gigantic-Backend", name: "Gigantic-Backend", createdAt: "2024-08-29" },
  { id: "Gigantic-Frontend", name: "Gigantic-Frontend", createdAt: "2024-08-29" }
];

export const defaultTasks: Task[] = [
  {
    id: "1",
    title: "Design Microservices",
    projectId: "Gigantic-Backend",
    assignedTo: "1",
    isCompleted: false,
    description: "This task is important",
    creationDate : "29/08/2024"
  },

  {
    id: "2",
    title: "Implement Frontend",
    projectId: "Gigantic-Frontend",
    assignedTo: "2",
    isCompleted: false,
    description: "This task is important",
    creationDate : "29/08/2024"
  }
];

export const defaultPeople: Person[] = [
  {
    id: "1",
    name: "Nimit Tanboontor",
    projectId: "Gigantic-Backend",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dae0ebfdf40e6f460109d0fe059fc80943e8e59a.jpg",
  },
  {
    id: "2",
    name: "Kritsakorn Sukkasem",
    projectId: "Gigantic-Frontend",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dae0ebfdf40e6f460109d0fe059fc80943e8e59a.jpg",
  },
  {
    id: "3",
    name: "Kongphop Saenphai",
    projectId: "Gigantic-Frontend",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dae0ebfdf40e6f460109d0fe059fc80943e8e59a.jpg",
  },
  {
    id: "4",
    name: "Phumiphat Wongsathit",
    projectId: "Gigantic-Frontend",
    image:
      "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dae0ebfdf40e6f460109d0fe059fc80943e8e59a.jpg",
  },
];
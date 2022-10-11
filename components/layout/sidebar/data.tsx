import { CheckCircle, Edit, MessageSquare, Star, Zap } from "react-feather";

export const sidebarData = [
  {
    id: "notes",
    text: "Notes",
    icon: <Edit />,
    color: "blue",
    href: "/notes",
  },
  {
    id: "events",
    text: "Events",
    icon: <Star />,
    color: "pink",
    href: "/events",
  },
  {
    id: "stories",
    text: "Stories",
    icon: <MessageSquare />,
    color: "purple",
    href: "/stories",
  },
  {
    id: "goals",
    text: "Goals",
    icon: <CheckCircle />,
    color: "green",
    href: "/goals",
  },
  {
    id: "lessons",
    text: "Lessons",
    icon: <Zap />,
    color: "orange",
    href: "/lessons",
  },
];

import { CheckCircle, Edit, MessageSquare, Star, Zap } from "react-feather";
import { Logo } from "../../logo";
import { sidebarData } from "./data";
import { Link } from "./link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-zinc-800 h-full p-4">
      <Logo />
      {sidebarData.map((props) => {
        return (
          <Link {...props} key={props.id}>
            test
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;

import { Dispatch } from "react";
import "./skillsList.scss";

interface Props {
  id?: number;
  title: string;
  active: boolean;
  setSelected: Dispatch<any>;
}

const SkillsList: React.FC<Props> = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={active ? "skillsList active" : "skillsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};

export default SkillsList;

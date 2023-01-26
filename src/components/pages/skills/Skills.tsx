import { useEffect, useState } from "react";
import "./skills.scss";
import SkillsList from "./skillsList/SkillsList";
import { BackEnd, DataBase, Design, FrontEnd } from "../../../data/DataSkills";
interface skillsProps {
  id: string;
  title: string;
  img: string;
}
interface skillsListProps {
  id: number;
  title: string;
}
interface SkillsData {
  [key: string]: skillsProps[];
}
 
function Skills() {   
  const [SelectedCategory, setSelected] = useState  (0);
  const [DataSkills, setDataSkills] = useState<skillsProps[]>([]);
  
  useEffect(() => {
    const skillsData:SkillsData = {
      0: FrontEnd,
      1: BackEnd,
      2: Design,
      3: DataBase
    }
    setDataSkills(skillsData[SelectedCategory]);
    console.log('passed');
    
  }, [SelectedCategory]);

  const listCategory: skillsListProps[] = [
    { id: 0, title: "Frontend" },
    { id: 1, title: "Backend" },
    { id: 2, title: "Design" },
    { id: 3, title: "Data Base" },
  ];

  return (
    <div className="skills-container" id="skills">
      <h1>Skills</h1>
      <ul>
        {listCategory.map((item) => (
          <SkillsList
            key={item.id}
            id={item.id}
            active={SelectedCategory === item.id}
            title={item.title}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="items-container">
        {DataSkills.map((skill: any) => (          
          <div className="item" key={skill.id}>
            <img src={skill.img} alt={skill.title}   />
            <h3 >{skill.title} </h3>            
          </div>           
           
        ))}
      </div>
    </div>
  );
}

export default Skills;

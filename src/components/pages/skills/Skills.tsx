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
 
  const [SelectedCategory, setSelected] = useState<number>(1);
  const [DataSkills, setDataSkills] = useState<skillsProps[]>([]);
  useEffect(() => {
    //inserisco gli array in un oggetto indicizato per poterlo scorrere
    const skillsData:SkillsData = {
      1: FrontEnd,
      2: BackEnd,
      3: Design,
      4: DataBase
    }
    setDataSkills(skillsData[SelectedCategory]);
     
    
  }, [SelectedCategory]);

  const listCategory: skillsListProps[] = [
    { id: 1, title: "Frontend" },
    { id: 2, title: "Backend" },
    { id: 3, title: "Design" },
    { id: 4, title: "Data Base" },
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

import React from 'react';

import SkillsGroup from '../components/SkillsGroup';
import data from '../../data/skills.json';


const Skills = () => {

    const skill_pro_data = data["proficent"];
    const skill_exp_data = data["experienced"];
    const skill_learn_data = data["learning"];

    return ( 
        <section id="skills">

            <div id="skills__background"/>

            <h2 id="skills__header">Skills</h2>

            <div id="skills__content">

                <SkillsGroup skillGroupName="proficent" _data={skill_pro_data}></SkillsGroup>
                <SkillsGroup skillGroupName="experienced" _data={skill_exp_data}></SkillsGroup>
                <SkillsGroup skillGroupName="learning" _data={skill_learn_data}></SkillsGroup>
            
            </div>
            
        </section>
    );
}
 
export default Skills;
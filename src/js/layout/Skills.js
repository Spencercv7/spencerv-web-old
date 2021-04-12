import React from 'react';

import SkillsGroup from '../components/SkillsGroup';
import { proficent, experienced, learning } from '../../data/skills.json';


const Skills = () => {

    return ( 
        <section id="skills">

            <div id="skills__background"/>

            <h2 id="skills__header">Skills</h2>

            <div id="skills__content">

                <SkillsGroup skillGroupName="proficent" _data={ proficent.skills }></SkillsGroup>
                <SkillsGroup skillGroupName="experienced" _data={ experienced.skills }></SkillsGroup>
                <SkillsGroup skillGroupName="learning" _data={ learning.skills }></SkillsGroup>
            
            </div>

            <div className="divider"/>
            
        </section>
    );
}
 
export default Skills;
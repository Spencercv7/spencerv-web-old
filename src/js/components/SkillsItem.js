const SkillsItem = ( {skill_data} ) => {
    return ( 
        <li className="skills__skill">
            <img className="skills__skill--image" src={ skill_data.skill_icon_src } alt={ skill_data.skill_name + " icon." }/>
            <span className="skills__skill--text">{ skill_data.skill_name }</span>
        </li>
    );
}

export default SkillsItem;
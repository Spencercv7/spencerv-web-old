const SkillsItem = ({ skill_data }) => {

    return (
        <li className="skills__skill">
            <div className="skills__skill--image-container">
                <img
                    className="skills__skill--image"
                    src={skill_data.skill_icon_src}
                    alt={skill_data.skill_name + " icon."}
                />
            </div>
            <span className="skills__skill--text">{skill_data.skill_name}</span>
        </li>
    );
};

export default SkillsItem;

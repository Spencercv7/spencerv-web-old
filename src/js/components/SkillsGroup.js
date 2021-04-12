import SkillsItem from './SkillsItem'

const SkillsGroup = ( {skillGroupName, _data} ) => {

    return ( 
        <div className="skills__group">

            <p className="skills__group--name">{ skillGroupName }</p>
            <ul className="skills__group--list">

                {
                    _data.map(current_skill => {
                        return <SkillsItem key={ current_skill.key } skill_data={ current_skill }></SkillsItem>
                    })
                }

            </ul>
        </div>    
    );
}
 
export default SkillsGroup;
import React from 'react';
import ItemMenuIcon from './ItemMenuIcon';
import ItemMenu from './ItemMenu';
import ShowMore from './ShowMore';
import SkillForm from '../pages/profile/forms/Skill';


class SkillEdit extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      iidx: -1,
      edit: -1,
      value: null
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  toggleMenu(idx) {

    let newState = { ...this.state };

    this.setState({...newState, iidx: this.state.iidx === idx ? -1 : idx });
  }

  toggleEdit(edit, skill) {

    let newState = { ...this.state };

    if (this.state.edit === edit)
      this.setState({...newState, edit: -1 });
    else this.setState({...newState, edit: edit, value: skill });
  }

  cancelEdit() {
    let newState = { ...this.state };

    this.setState({...newState,  iidx: -1, edit: -1 });
  }

  render() {
    const { idx, skills, experience_id } = this.props,
    { iidx, edit, value } = this.state;

    return (
      <div className="skills">
        <h4>Skills</h4>
        {skills.map((el, i) => {
          let showMenu = i === iidx,
          editMode = i === edit;

          return <div key={i} className="job_detail_edit">
            {editMode !== true ?
              <ShowMore key={i} description={el.description} /> :
              <SkillForm idx={i} cancelEditCb={this.cancelEdit} skill={el} experience_id={experience_id} />}
            {!editMode && <ItemMenuIcon callback={this.toggleMenu}
              key={'item_menu_icon_' + i} idx={i} show={showMenu} />}
            {showMenu && !editMode && <ItemMenu key={'item_menu_' + i} idx={i} editCallback={this.toggleEdit} skill={skills} experience_id={experience_id} />}
          </div>
        })}
      </div>
    );
  }
}

export default SkillEdit;

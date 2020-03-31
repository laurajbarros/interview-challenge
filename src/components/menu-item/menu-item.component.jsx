import React from 'react';
import './menu-item.styles.scss';
import Dietary from '../dietary/dietary.component';
import RemoveButton from './../remove-button/remove-button.component';
import { connect } from 'react-redux';
import { addItemToMenu } from '../../redux/menu/menu.actions';


class MenuItem extends React.Component {

  handleAddItemToMenu = () => {
    if(this.props.addToMenu){
      this.props.addItemToMenu(this.props.item);
    }
  }

  render(){
    const {item, showRemoveButton} = this.props;
    return (
      <li
        data-testid='menu-item'
        onClick={this.handleAddItemToMenu}
        className="item"
      >
        <h2>{item.name}</h2>
        <p>
          {
            item.dietaries
            .map((tag)=> (
              <Dietary key={tag} tag={tag}/>
            ))
          }
        </p>
        {(showRemoveButton) ?
          <RemoveButton item={item}
          />
          : ''
        }
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
    addItemToMenu: item => dispatch(addItemToMenu(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(MenuItem);

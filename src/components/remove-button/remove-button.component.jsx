import React from 'react';
import './remove-button.styles.scss';
import { connect } from 'react-redux';
import { removeItemFromMenu } from '../../redux/menu/menu.actions';


class RemoveButton extends React.Component {

  handleRemoveItem = () => {
    this.props.removeItemFromMenu(this.props.item);
  }
  render(){
    return (
      <button
        className="remove-item"
        onClick={this.handleRemoveItem}
      >x
      </button>

    )
  }
}
const mapDispatchToProps = (dispatch) => ({
    removeItemFromMenu: item => dispatch(removeItemFromMenu(item))
});

export default connect(
  null,
  mapDispatchToProps
)(RemoveButton);

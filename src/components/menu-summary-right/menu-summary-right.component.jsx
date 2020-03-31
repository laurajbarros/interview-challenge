import React from 'react';
import './menu-summary-right.styles.scss';
import Dietary from '../dietary/dietary.component';
import { connect } from 'react-redux';

const CountByDietaryType = (props) => {
  return (
    <div className="menu-summary-right">
      {
        Object.keys(props.dietaryCount).map((keytag, i) => (
          <p key={i}>
            {props.dietaryCount[keytag]}x
            <Dietary tag={keytag}/>
          </p>
        ))
      }
    </div>
  )
}
const mapStateToProps = ({menu}) => ({
  dietaryCount: menu.selected_items_by_menu_type
});

export default connect(mapStateToProps)(CountByDietaryType);

import React from 'react';
import './menu-summary-right.styles.scss';
import Dietary from '../dietary/dietary.component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CountByDietaryType = ({dietaryCount}) => {
  return (
    <div className="menu-summary-right">
      {
        Object.keys(dietaryCount).map((keytag, i) => (
          <p key={i}>
            {dietaryCount[keytag]}x
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

CountByDietaryType.propTypes = {
  dietaryCount: PropTypes.object
};

export default connect(mapStateToProps)(CountByDietaryType);

import React from 'react';
import TabOne from './One';
import TabTwo from './Two';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MdOutlineLocalOffer } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <>

        <div className="container">
          <div className='offer-box'>

            <div className="title-head">
              <h2>offers</h2>
            </div>
            <div className={`${classes.root} tab-box`}>
              <AppBar position="static" className='tab-bar'>
                <Tabs value={value} onChange={this.handleChange} className="all-tabs">
                  <Tab label={<span className='tab-title'><span className='tab-icon'><MdOutlineLocalOffer /></span> <span>Promotions</span></span>} className="tab-one" />
                  <Tab label={<span className='tab-title'><span className='tab-icon'><HiOutlineTicket /> </span><span>Coupons</span></span>} className="tab-two" />
                </Tabs>
              </AppBar>
              {value === 0 && <TabContainer className="dds"><TabOne /></TabContainer>}
              {value === 1 && <TabContainer><TabTwo /></TabContainer>}
            </div>
          </div>
        </div>
      </>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);

import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
  margin: 12,
};
export default class Button  extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
      <RaisedButton 
      label="Login With Discord" 
      primary={true} 
      style={style}
      href="https://discordapp.com/oauth2/authorize?client_id=381562426253901834&scope=identify&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A30000%2Fapi%2Fdiscord%2Fcallback"
      />
      <br/>
      </MuiThemeProvider>
      
    );
  }
}
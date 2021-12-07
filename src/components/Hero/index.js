import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Header,
  CompanySection,
  ButtonSection,
  CompanyLogo,
  Status,
  CompanyID,
  ChatWithUs,
  EditProfile,
} from "./styles";
import cart from "../../assets/imgs/cns-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "200px",
  },
}));

const Hero = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header>
        <CompanySection>
          <CompanyLogo src={data?.logo} />
          <div style={{ display: "flex" }}>
            <Status>In Que</Status>
            <span
              style={{
                paddingLeft: "5px",
                color: "#909090",
                marginTop: "-2px",
              }}
            >
              &#9432;
            </span>
            <CompanyID> {`Company ID: ${data?.email}`} </CompanyID>
          </div>
        </CompanySection>
        <ButtonSection>
          {/* <ChatWithUs to="#">Chat With Us</ChatWithUs> */}
          {/* <EditProfile to="#">Edit Profile</EditProfile> */}
        </ButtonSection>
      </Header>
    </div>
  );
};

export default Hero;
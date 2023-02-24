import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Card, Grid, Grow, Typography } from "@mui/material";
import { AddressBlock } from "./address";
import { PersonalDataBlock } from "./personalData";
import { MailBlock } from "./mail";
import { menuDictionary } from "i18n";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./userAccount.css";
import { useContext } from "react";
import { UserAccountContext } from "../../context/UserAccount";
import { FirstConnectForm } from "./firstConnect";

export const UserAccount = () => {
  const { user } = useContext(UserAccountContext);

  console.log(user);

  return (
    <>
      <div className="user-account">
        <div className="welcomeUser">{menuDictionary.welcomeUser}</div>
        <Box sx={{ m: 2 }}>
          <Grid container spacing={3}>
            <Grid item container xs={12} spacing={3}>
              <Grow in style={{ transformOrigin: "0 0 0" }} timeout={400}>
                <Grid item xs={12} sm={4}>
                  <Typography variant="h6" sx={{ p: 1, textTransform: "uppercase" }}>
                    <AlternateEmailIcon /> {menuDictionary.myEmail}
                  </Typography>
                  <MailBlock />
                </Grid>
              </Grow>
              <Grow in style={{ transformOrigin: "0 0 0" }} timeout={800}>
                <Grid item xs={12} sm={8}>
                  <Typography variant="h6" sx={{ p: 1, textTransform: "uppercase" }}>
                    <ManageAccountsIcon /> {menuDictionary.myCredentials}
                  </Typography>
                  <Card
                    sx={{
                      p: 2,
                    }}
                  >
                    <Button>
                      Modifier mon mot de passe - first connect is {`${user.firstConnect}`}
                    </Button>
                    <Button>Autres enquêtes liées à mon adresse de messagerie</Button>
                    <Button>
                      Vous avez reçu un nouveau compte que vous souhaitez associer au compte ?
                    </Button>
                  </Card>
                </Grid>
              </Grow>
            </Grid>

            <Grid item container xs={12} spacing={3}>
              <Grow in style={{ transformOrigin: "0 0 0" }} timeout={1000}>
                <Grid item xs={12} sm={5}>
                  <Typography variant="h6" sx={{ p: 1, textTransform: "uppercase" }}>
                    <ContactMailIcon /> {menuDictionary.myAddress}
                  </Typography>
                  <AddressBlock />
                </Grid>
              </Grow>
              <Grow in style={{ transformOrigin: "0 0 0" }} timeout={1200}>
                <Grid item xs={12} sm={7}>
                  <Typography variant="h6" sx={{ p: 1, textTransform: "uppercase" }}>
                    <AccountCircleIcon /> {menuDictionary.myPersonalData}
                  </Typography>
                  <PersonalDataBlock />
                </Grid>
              </Grow>
            </Grid>
          </Grid>
        </Box>
        <FirstConnectForm open={user.firstConnect} user={user} />
      </div>
    </>
  );
};

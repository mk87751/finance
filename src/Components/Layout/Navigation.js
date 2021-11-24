import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";
export default function Navigation() {
  const history = useHistory();
  const [value, setValue] = React.useState("home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "60px",
        paddingLeft: "100px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="home" label="Home" />
        <Tab value="areaProfile" label="Area Profile" />
      </Tabs>
    </Box>
  );
}

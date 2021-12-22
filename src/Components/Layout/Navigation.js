import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useHistory, useLocation } from "react-router";
export default function Navigation() {
  const location = useLocation();
  const history = useHistory();
  const [value, setValue] = useState("home");
  console.log(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };
  useEffect(() => {
    if (location.pathname === "/areaProfile") {
      setValue("areaProfile");
    }
  }, [location]);

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

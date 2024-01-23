/* eslint-disable react/prop-types */
import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import { LoremIpsum } from "react-lorem-ipsum"

export default function TabView(props) {
  const [value, setValue] = React.useState("one")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="DESCRIPTION" wrapped />
          <Tab value="two" label="DETAILS" />
          <Tab value="three" label="REVIEWS" />
        </Tabs>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        {value === "one" ? props.detail : <LoremIpsum p={2} />}
      </Box>
    </Box>
  )
}

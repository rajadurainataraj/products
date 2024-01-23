import PropTypes from "prop-types"
import Box from "@mui/material/Box"

import Skeleton from "@mui/material/Skeleton"

function Media() {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "200px",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <Skeleton variant="rectangular" width={300} height={158} />

        <Box sx={{ pt: 0.5, display: "flex" }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Box>

      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <Skeleton variant="rectangular" width={300} height={158} />

        <Box sx={{ pt: 0.5, display: "flex" }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Box>
      <Box sx={{ width: 210, marginRight: 0.5, my: 5 }}>
        <Skeleton variant="rectangular" width={300} height={158} />
        <Box sx={{ pt: 0.5, display: "flex" }}>
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      </Box>
    </Box>
  )
}

Media.propTypes = {
  loading: PropTypes.bool,
}

export default function Skeldon() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media loading />
      <Media loading />
    </Box>
  )
}

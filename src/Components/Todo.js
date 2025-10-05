import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

export default function Todo({ title, description, isCompleted }) {
  return (
    <>
      <Card
        className="todoCard"
        sx={{
          minWidth: 275,
          backgroundColor: "#283593",
          color: "#FFF",
          marginTop: 5,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid size={8}>
              {" "}
              <Typography
                gutterBottom
                style={{
                  color: "white",
                }}
                variant="h5"
                sx={{ color: "text.secondary" }}
              >
                Day Plan
              </Typography>
              <Typography variant="h7">Plan Informations</Typography>
            </Grid>

            {/* ACTION BUTON TA3 EL CARDS*/}
            <Grid
              size={4}
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              <IconButton
                className="btn-icon"
                aria-label="delete"
                style={{
                  color: "#8bc34a",
                  background: "white",
                  border: "solid 3px #8bc34a ",
                  cursor: "pointer",
                }}
              >
                <CheckIcon />
              </IconButton>

              <IconButton
                className="btn-icon"
                aria-label="delete"
                style={{
                  color: "#1769aa",
                  background: "white",
                  border: "solid 3px #1769aa ",
                  cursor: "pointer",
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton
                className="btn-icon"
                aria-label="delete"
                style={{
                  color: "red",
                  background: "white",
                  border: "solid 3px red ",
                  cursor: "pointer",
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

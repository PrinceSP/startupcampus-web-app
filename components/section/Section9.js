import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { qna } from "../../content/qna";
import HighlightText from "../HighlightText";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MyButton from "../MyButton";

function Section9() {
  return (
    <Grid container spacing={3} my={6} py={6}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center" fontWeight={700}>
          <HighlightText width="-2%">Frequently</HighlightText> Asked Question’s
        </Typography>
      </Grid>
      {qna.map((item) => (
        <Grid
          key={item.q}
          item
          xs={12}
          display="flex"
          justifyContent={"center"}
        >
          <Stack width={980}>
            <Accordion
              sx={{
                boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
                padding: "1em",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" fontWeight={600}>
                  {item.q}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider />
                <Typography mt={4} variant="body2" color="sc_gray.dark">
                  {item.a}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      ))}
      <Grid item xs={12} display="flex" justifyContent={"center"}>
        <MyButton>Lihat lebih banyak</MyButton>
      </Grid>
    </Grid>
  );
}

export default Section9;

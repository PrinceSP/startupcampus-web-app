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
import React, { useEffect, useState } from "react";
import HighlightText from "../HighlightText";
import AddIcon from '@mui/icons-material/Add';
import MyButton from "../MyButton";
import ReactMarkdown from "react-markdown";

function Section9({ faq}) {
  const [state, setState] = useState(5);
  const qna = faq?.slice(0);
  return (
    <Grid container spacing={3} my={6} py={6}>
      <Grid item xs={12} data-aos="fade-down">
        <Typography variant="h4" textAlign="center" fontWeight={700}>
          <HighlightText width="-2%">Frequently</HighlightText> Asked Question’s
        </Typography>
      </Grid>
      {qna.slice(0, state).map((item, idx) => (
        <Grid
          key={idx}
          item
          xs={12}
          display="flex"
          justifyContent={"center"}
          data-aos="fade-left"
        >
          <Stack width={980}>
            <Accordion
              sx={{
                boxShadow: "0px 8px 20px rgba(43, 44, 39, 0.1)",
                padding: "1em",
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6" fontWeight={600}>
                  {item?.fields.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider />
                <Typography mt={4} variant="body2" color="sc_gray.dark">
                  <ReactMarkdown>{item?.fields.answer}</ReactMarkdown>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      ))}
      {<Grid item xs={12} display="flex" justifyContent={"center"}>
        {state < faq.length ? (
          <MyButton onClick={() => setState((prev) => prev + 5)}>
            Lihat lebih banyak
          </MyButton>
        ) : (
          <MyButton onClick={() => setState(5)}>Lihat lebih sedikit</MyButton>
        )}
      </Grid>}
    </Grid>
  );
}

export default Section9;

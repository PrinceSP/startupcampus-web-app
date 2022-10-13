import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import MyButton from "../../components/MyButton";

import { listMenu } from "../../content/sideMenu";
import Main from "../../components/trackPage/Main";
import Board from "../../components/trackPage/Board";
import SideBar from "../../components/trackPage/SideBar";

export default function Track() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: "url('/images/FO.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "relative",
            "&::before": {
              zIndex: "0",
              content: "''",
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(90deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(111.55deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%), linear-gradient(68.45deg, rgba(43, 44, 39, 0.75) 0%, rgba(43, 44, 39, 0.0375) 100%)",
            },
          }}
        >
          <Container>
            <Main />
          </Container>
        </Grid>
      </Grid>

      <Container>
        <Grid container justifyContent={"center"}>
          <Grid item xs={10}>
            <Board />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item md={3}>
            <SideBar />
          </Grid>
          <Grid item md={9}>
            a
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

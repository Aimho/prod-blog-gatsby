import React, { Suspense } from "react";
import { Container, Fade } from "@material-ui/core";

import ThemeProvider from "../../styles/ThemeProvider";
import LoadingPanel from "../LoadingPanel";
import Header from "./Header";
import Banner, { Props } from "./Banner";

const Layout: React.FC<Props> = props => (
  <Suspense fallback={<LoadingPanel isOpen backdropInvisible />}>
    <ThemeProvider>
      <Header />
      <Banner {...props} />
      <Fade in>
        <Container maxWidth="md" component="main" disableGutters>
          {props.children}
        </Container>
      </Fade>
    </ThemeProvider>
  </Suspense>
);

export default Layout;

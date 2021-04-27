import React, { Suspense } from "react";
import { Container } from "@material-ui/core";

import ThemeProvider from "../../styles/ThemeProvider";
import LoadingPanel from "../LoadingPanel";
import Header from "./Header";
import Banner, { Props } from "./Banner";

const Layout: React.FC<Props> = props => (
  <Suspense fallback={<LoadingPanel isOpen backdropInvisible />}>
    <ThemeProvider>
      <Header />
      <Banner {...props} />
      <Container
        maxWidth="md"
        component="main"
        style={{ marginTop: 40 }}
        disableGutters
      >
        {props.children}
      </Container>
    </ThemeProvider>
  </Suspense>
);

export default Layout;

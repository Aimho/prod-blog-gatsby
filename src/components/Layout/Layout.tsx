import React, { Suspense } from "react";
import { Container } from "@material-ui/core";

import ThemeProvider from "../../styles/ThemeProvider";
import LoadingPanel from "../LoadingPanel";
import Header from "./Header";
import Banner, { Props } from "./Banner";

const Layout: React.FC<Props> = ({ children }) => (
  <Suspense fallback={<LoadingPanel isOpen backdropInvisible />}>
    <ThemeProvider>
      <Header />
      <Banner />
      <Container maxWidth="lg" component="main" style={{ marginTop: 40 }}>
        {children}
      </Container>
    </ThemeProvider>
  </Suspense>
);

export default Layout;

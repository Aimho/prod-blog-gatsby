import React from "react";
import { navigate } from "gatsby";
import { useForm } from "react-hook-form";

import {
  Grid,
  Container,
  TextField,
  IconButton,
  InputAdornment,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Home, Search, LocalOffer } from "@material-ui/icons";

import { LogoImg } from "./style";

const Header = () => {
  const theme = useTheme();
  const matchXS = useMediaQuery(theme.breakpoints.down("xs"));
  const { register, handleSubmit, setValue } = useForm<{ search: string }>();

  const onSubmit = ({ search }) => {
    if (!search) return;
    setValue("search", "");
    navigate(`/?search=${search}`);
  };

  const Logo = () => {
    const onClickHome = () => navigate("/");

    if (matchXS) {
      return (
        <IconButton onClick={onClickHome}>
          <Home />
        </IconButton>
      );
    }
    return (
      <LogoImg
        alt="AimHo Blog"
        src={require("../../resources/images/logo.svg")}
        onClick={onClickHome}
      />
    );
  };

  const SearchBar = () => (
    <TextField
      type="search"
      fullWidth={matchXS}
      placeholder="Search Posts"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton type="submit">
              <Search />
            </IconButton>
          </InputAdornment>
        )
      }}
      inputProps={{
        ...register("search"),
        "aria-label": "search posts"
      }}
    />
  );

  const TagButton = () => {
    return (
      <IconButton>
        <LocalOffer />
      </IconButton>
    );
  };

  return (
    <Container maxWidth="lg" component="header">
      <Grid
        container
        component="form"
        alignItems="center"
        onSubmit={handleSubmit(onSubmit)}
        style={{ padding: "16px 0px" }}
      >
        <Grid xs={2} sm="auto" item style={{ marginRight: "auto" }}>
          <Logo />
        </Grid>
        <Grid xs={8} sm="auto" item>
          <SearchBar />
        </Grid>
        <Grid xs={2} sm="auto" item>
          <TagButton />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;

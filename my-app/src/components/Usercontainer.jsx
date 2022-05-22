import React from "react";
import UserItem from "./UserItem";
import { pictureUsers } from "../constants/mock.js";
import { Grid } from "@nextui-org/react";
const Usercontainer = () => {
  return (
    <Grid.Container gap={2}>
      {pictureUsers.map((data) => {
        return (
          <Grid xs={4} key={data.id}>
            <UserItem  user={data} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
};
export default Usercontainer;

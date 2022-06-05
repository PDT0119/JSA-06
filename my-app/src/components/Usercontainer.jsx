import React, {useEffect, useState} from "react";
import UserItem from "./UserItem";
import { Grid } from "@nextui-org/react";

const Usercontainer = () => {
    const [users, setUsers] = useState([])
    const getUser = async () => {
        const request = await fetch("https://reqres.in/api/users?page=2")
        const response = await request.json()
        const data = response.data
        setUsers(data);
    }
    useEffect(() => {
        getUser();
    },[])
    console.log("users",users)
  return (
    <Grid.Container gap={2}>
      {users.map((data) => {
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

import { User, Card, Text } from "@nextui-org/react";
import React from "react";

const UserItem = (props) => {
    const data = props.user
    return(
        <Card shadow>
            <User 
            src={data.avatar}
            name={`${data.first_name} ${data.last_name}`}
            />
            <Text h4 color="primary">
            {data.email}
            </Text>
        </Card>
    )
}
export default UserItem
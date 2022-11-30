import React, { FC, useEffect } from "react";
import { useAction } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: FC = () => {
  const { users, error, loading } = useTypedSelector((state) => state.user);
const {fetchUsers} = useAction()

  useEffect(() => {
    fetchUsers() as any;
  }, []);

  if (loading) {
    return <h1>Идёт загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UserList;

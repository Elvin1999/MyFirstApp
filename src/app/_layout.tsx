import { View } from "react-native";

import Hello from "@/components/Hello";
import Counter from "@/components/Counter";
import UserList from "@/components/UserList";

export default function TabLayout() {
  
  return (
    <View style={{ padding: 20 }}>
      {/* <Hello name="Elvin" age={27} />
      <Counter />  */}
      <UserList />
    </View>
  );
}

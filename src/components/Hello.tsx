let name: string | number = "Elvin";

name = "Ali";
name = 100;

type Props = {
  name: string;
  age?: number;
};

import { Text, View } from "react-native";

export default function Hello({ name, age }: Props) {
  return (
    <View>
      <Text>Hello {name}</Text>
      <Text>You are {age} years old</Text>
    </View>
  );
}

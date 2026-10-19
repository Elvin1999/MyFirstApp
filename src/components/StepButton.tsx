import { Button } from "react-native";

type StepButtonProps = {
  title: string;
  color: any;
  onPress: () => void;
};

export default function StepButton({ title, color, onPress }: StepButtonProps) {
  return <Button color={color} title={title} onPress={onPress} />;
}

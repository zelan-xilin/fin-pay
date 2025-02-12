import { useGlobalContext } from "@/lib/GlobalContext";
import { Redirect } from "expo-router";

export default function Index() {
  const { isLoaded } = useGlobalContext();

  if (isLoaded) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/sign-in" />;
}

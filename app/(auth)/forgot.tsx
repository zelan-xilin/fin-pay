import { icon, illustration } from "@/constants/assets";
import colors from "@/constants/colors";
import { useGlobalContext } from "@/lib/GlobalContext";
import { validateEmail } from "@/lib/utils";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

const Email = ({ onChange }: { onChange: (str: string) => void }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  useEffect(() => {
    setEmailError(false);
  }, [email]);

  const onSend = () => {
    if (!email) {
      return;
    }

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    onChange(email);
  };

  return (
    <View className="card-effect rounded-3xl p-6 gap-4">
      <Text className="caption-primary text-neutral-200">Type your email</Text>

      <TextInput
        keyboardType="email-address"
        placeholder="Email"
        className={`h-14 px-4 border body-tertiary rounded-2xl ${
          emailError ? "border-semantic-100" : "border-neutral-400"
        }`}
        onChangeText={setEmail}
      />

      <Text className="body-primary text-neutral-200">
        We texted you a code to verify your email
      </Text>

      <Pressable
        className={`h-14 items-center justify-center rounded-2xl ${
          email ? "bg-primary-100" : "bg-primary-400"
        }`}
        disabled={!email}
        onPress={onSend}
      >
        <Text className="body-primary text-neutral-600">Send</Text>
      </Pressable>
    </View>
  );
};
const Code = ({
  email,
  onChange,
}: {
  email: string;
  onChange: (num: 1 | -1) => void;
}) => {
  const [code, setCode] = useState<number>();
  const [codeError, setCodeError] = useState(false);
  useEffect(() => {
    setCodeError(false);
  }, [code]);

  const [countdown, steCountdown] = useState(60);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  const onResend = () => {
    steCountdown(60);
    clearInterval(timer);

    setTimer(
      setInterval(() => {
        steCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }

          return prev - 1;
        });
      }, 1000)
    );
  };
  useEffect(() => {
    onResend();
    return () => clearInterval(timer);
  }, []);

  const onSend = () => {
    if (!code) {
      return;
    }

    if (code.toString().length !== 6 || Number.isNaN(Number(code))) {
      setCodeError(true);
      return;
    }

    onChange(1);
  };

  return (
    <View className="card-effect rounded-3xl p-6 gap-4">
      <Text className="caption-primary text-neutral-200">Type a code</Text>

      <View className="flex-row gap-4">
        <TextInput
          keyboardType="numeric"
          placeholder="Code"
          className={`flex-1 h-14 px-4 border body-tertiary rounded-2xl ${
            codeError ? "border-semantic-100" : "border-neutral-400"
          }`}
          onChangeText={(val) => setCode(Number(val))}
        />

        <Pressable
          className={`h-14 px-4 items-center justify-center rounded-2xl ${
            countdown <= 0 ? "bg-primary-100" : "bg-primary-400"
          }`}
          disabled={countdown > 0}
          onPress={onResend}
        >
          <Text className="body-primary text-neutral-600">Resend</Text>
        </Pressable>
      </View>

      <View className="flex-row flex-wrap">
        <Text className="body-primary text-neutral-200">
          We texted you a code to verify your email{" "}
        </Text>
        <Pressable onPress={() => onChange(-1)}>
          <Text className="body-primary text-primary-100">{email}</Text>
        </Pressable>
      </View>

      <Text className="body-primary text-neutral-200">
        This code will expired 10 minutes after this message. If you don't get a
        message.
      </Text>

      <Pressable
        className={`h-14 items-center justify-center rounded-2xl ${
          code ? "bg-primary-100" : "bg-primary-400"
        }`}
        disabled={!code}
        onPress={onSend}
      >
        <Text className="body-primary text-neutral-600">Change password</Text>
      </Pressable>
    </View>
  );
};
const Password = ({ onChange }: { onChange: () => void }) => {
  const [password, setPassword] = useState({ newPwd: "", confirmPwd: "" });
  const [passwordError, setPasswordError] = useState(false);
  useEffect(() => {
    setPasswordError(false);
  }, [password]);

  const onSend = () => {
    if (!password.newPwd || !password.confirmPwd) {
      return;
    }

    if (password.newPwd !== password.confirmPwd) {
      setPasswordError(true);
      return;
    }

    onChange();
  };

  return (
    <View className="card-effect rounded-3xl p-6 gap-4">
      <View className="gap-2">
        <Text className="caption-primary text-neutral-200">
          Type your new password
        </Text>
        <TextInput
          secureTextEntry
          className={`h-14 px-4 border body-tertiary rounded-2xl ${
            passwordError ? "border-semantic-100" : "border-neutral-400"
          }`}
          onChangeText={(val) => setPassword({ ...password, newPwd: val })}
        />
      </View>

      <View className="gap-2">
        <Text className="caption-primary text-neutral-200">
          Confirm password
        </Text>
        <TextInput
          secureTextEntry
          className={`h-14 px-4 border body-tertiary rounded-2xl ${
            passwordError ? "border-semantic-100" : "border-neutral-400"
          }`}
          onChangeText={(val) => setPassword({ ...password, confirmPwd: val })}
        />
      </View>

      <Pressable
        className={`h-14 items-center justify-center rounded-2xl ${
          password.newPwd && password.confirmPwd
            ? "bg-primary-100"
            : "bg-primary-400"
        }`}
        disabled={!password.newPwd || !password.confirmPwd}
        onPress={onSend}
      >
        <Text className="body-primary text-neutral-600">Change password</Text>
      </Pressable>
    </View>
  );
};
const Success = ({ onChange }: { onChange: () => void }) => {
  const onSend = () => {
    onChange();
  };

  return (
    <View className="p-6 gap-4">
      <Image
        source={illustration.illustration1}
        className="w-full h-60"
        resizeMode="contain"
      />

      <Text className="heading-primary text-primary-100 text-center">
        Change password successfully!
      </Text>

      <Text className="body-tertiary text-neutral-100 text-center">
        You have successfully change password.{"\n"}
        Please use the new password when Sign in.
      </Text>

      <Pressable
        className="h-14 items-center justify-center rounded-2xl bg-primary-100"
        onPress={onSend}
      >
        <Text className="body-primary text-neutral-600">Ok</Text>
      </Pressable>
    </View>
  );
};

export default function Forgot() {
  const { login } = useGlobalContext();

  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "code" | "password" | "success">(
    "email"
  );

  const emailChange = (str: string) => {
    setEmail(str);
    setStep("code");
  };
  const codeChange = (num: 1 | -1) => {
    if (num === 1) {
      setStep("password");
      return;
    }

    setStep("email");
  };
  const passwordChange = () => {
    setStep("success");
  };
  const onSuccess = () => {
    login(email.split("@")[0], "123456");
    router.push("/home");
  };

  return (
    <>
      <Pressable
        onPress={() => router.back()}
        className="flex-row px-6 gap-4 items-center"
      >
        <Image
          source={icon.icon39}
          className="size-4"
          resizeMode="contain"
          tintColor={colors.neutral[600]}
        />

        <Text className="heading-secondary text-neutral-600">
          Forgot password
        </Text>
      </Pressable>

      <View className="flex-1 bg-neutral-600 rounded-t-3xl">
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerClassName="p-6"
        >
          {step === "email" && <Email onChange={emailChange} />}

          {step === "code" && <Code email={email} onChange={codeChange} />}

          {step === "password" && <Password onChange={passwordChange} />}

          {step === "success" && <Success onChange={onSuccess} />}
        </ScrollView>
      </View>
    </>
  );
}

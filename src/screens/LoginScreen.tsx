import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { RouteComponentProps } from "react-router-native";
import { ButtonWithIcon, TextField } from "../components";
import { ButtonWithTitle } from "../components/ButtonWithTitle";

interface LoginProps {
  history: RouteComponentProps["history"];
  OnUserLogin: Function;
  OnUserSignup: Function;
}

export const LoginScreen: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Login");
  const [isSignup, setIsSignup] = useState(false);

  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(true);
  const [requestOtpTitle, setRequestOtp] = useState("Request a New OTP in");
  const [canRequestOtp, setCanRequestOtp] = useState(true);

  let countDown: number;

  const onTapAuthenticate = () => {
    if (isSignup) {
      props.OnUserSignup(email, phone, password);
    } else {
      props.OnUserLogin(email, password);
    }
  };

  const onTapOptions = () => {
    setIsSignup(!isSignup);
    setTitle(!isSignup ? "Signup" : "Login");
  };

  if (!verified) {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            source={require("../images/verify_otp.png")}
            style={{ width: 120, height: 120, margin: 20 }}
          />
          <Text style={{ fontSize: 22, fontWeight: "500", margin: 10 }}>
            Verification
          </Text>
          <Text
            style={{
              fontSize: 16,
              padding: 10,
              marginBottom: 20,
              color: "#716F6F",
            }}
          >
            Enter your OTP sent to your mobile number
          </Text>
          <TextField isOtp={true} placeholder="OTP" onTextChange={() => {}} />
          <ButtonWithTitle
            title="Verify OTP"
            onTap={() => {}}
            width={260}
            height={50}
          />
          <ButtonWithTitle
            disable={canRequestOtp}
            title={requestOtpTitle}
            isNoBg={true}
            onTap={() => {}}
            width={260}
            height={50}
          />
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <ButtonWithIcon
            icon={require("../images/back_arrow.png")}
            onTap={() => props.history.goBack()}
            width={40}
            height={40}
          />
          <Text style={{ fontSize: 30, fontWeight: "400" }}>{title}</Text>
        </View>
        <View style={styles.body}>
          <TextField
            placeholder="Email ID"
            onTextChange={setEmail}
            isSecure={false}
          />

          {isSignup && (
            <TextField
              placeholder="Phone Number"
              onTextChange={setPhone}
              isSecure={false}
            />
          )}
          <TextField
            placeholder="Password"
            onTextChange={setPassword}
            isSecure={true}
          />

          <ButtonWithTitle
            title={title}
            height={50}
            width={350}
            onTap={onTapAuthenticate}
          />

          <ButtonWithTitle
            title={
              !isSignup
                ? "No Account? Signup Here"
                : "Have an Account? Login Here"
            }
            height={50}
            width={350}
            onTap={onTapOptions}
            isNoBg={true}
          />
        </View>
        <View style={styles.footer}></View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navigation: {
    flex: 1,
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
  },
});

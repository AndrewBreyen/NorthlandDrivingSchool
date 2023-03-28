import { StyleSheet } from "react-native";
import { COLORS } from ".";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  headerText: {
    fontSize: 30,
  },
  subheaderText: {
    fontSize: 20,
    paddingVertical: 10
  },
  button: {
    backgroundColor: COLORS.primary,
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: COLORS.white,
    marginTop: 5,
    borderColor: COLORS.primary,
    borderWidth: 2,
    width: "80%",
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 16,
  },
});

export default styles;

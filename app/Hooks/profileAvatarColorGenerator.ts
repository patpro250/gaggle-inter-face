// utils/getLetterAndBackground.ts

export const getLetterAndBackground = (name: string) => {
  const firstLetter = name.trim().charAt(0).toUpperCase();

  const softLetterColors: { [key: string]: string } = {
    A: "#4285F4", // Blue
    B: "#EA4335", // Red
    C: "#FBBC05", // Yellow
    D: "#34A853", // Green
    E: "#EA4335", // Red
    F: "#FBBC05", // Yellow
    G: "#4285F4", // Blue
    H: "#34A853", // Green
    I: "#EA4335", // Red
    J: "#FBBC05", // Yellow
    K: "#4285F4", // Blue
    L: "#34A853", // Green
    M: "#EA4335", // Red
    N: "#FBBC05", // Yellow
    O: "#4285F4", // Blue
    P: "#34A853", // Green
    Q: "#EA4335", // Red
    R: "#FBBC05", // Yellow
    S: "#4285F4", // Blue
    T: "#34A853", // Green
    U: "#EA4335", // Red
    V: "#FBBC05", // Yellow
    W: "#4285F4", // Blue
    X: "#34A853", // Green
    Y: "#EA4335", // Red
    Z: "#FBBC05", // Yellow
  };

  const backgroundColor = softLetterColors[firstLetter] || "#E0E0E0"; // fallback

  return {
    letter: firstLetter,
    backgroundColor,
  };
};

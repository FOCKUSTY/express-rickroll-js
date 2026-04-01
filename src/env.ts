export const {
  REDIRECT_URL,
  PORT
} = process.env as {
  REDIRECT_URL: string,
  PORT: string
};

if (!REDIRECT_URL || !PORT) {
  throw new Error("Redirect url or port is not defined.");
}

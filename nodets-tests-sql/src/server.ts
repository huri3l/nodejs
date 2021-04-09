import { app, port } from "./app";

app.listen(port, () =>
  console.log(`🎉 API is running on http://localhost:${port}`)
);

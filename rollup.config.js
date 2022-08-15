import serve from "rollup-plugin-serve"

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/umd/SimulationSingleSPA.js",
    format: "umd",
    name: "SimulationSingleSPA",
    sourcemap: true
  },
  plugins: [
    serve({
      open: true,
      openPage: "/public/index.html",
      contentBase: "",
      port: 8848
    })
  ]
}
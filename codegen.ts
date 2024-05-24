import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://sizemodule-api.uat.latido.com.np/graphql",
  documents: ["src/GraphQl/**/*.ts"],
  generates: {
    "./src/GraphQl/Generated/graphql.tsx": {
      presetConfig: {
        gqlTagName: "gql",

      },
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
        "fragment-matcher",
      ],
    },
  },
};

export default config;

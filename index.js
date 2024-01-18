export default {
    plugins: ["prettier-plugin-tailwindcss"],

    tailwindConfig: "./frontend/tailwind.config.cjs",
    tailwindFunctions: ["tv", "clsx"],

    tabWidth: 4,
    semi: true,
    endOfLine: "auto",
    arrowParens: "avoid",
    printWidth: 95,
    singleQuote: false,
    bracketSameLine: false,
    trailingComma: "es5",
};

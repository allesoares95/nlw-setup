# MOBILE
Configurações e bibliotecas ;


`npx expo start ` iniciar terminal;

`npx expo start --clear` resetar e iniciar

----------------------------------------------------------------
# NativeWind

https://www.nativewind.dev/

` npx nativewind init `

babel.config.js add
`plugins: ["nativewind/babel"],`

# Tipar className
https://www.nativewind.dev/getting-started/typescript

----------------------------------------------------------------
# Biblioteca SVG
https://docs.expo.dev/versions/latest/sdk/svg/

`npx expo install react-native-svg`


react native - svg transforme

https://github.com/kristerkari/react-native-svg-transformer
`npm i react-native-svg-transformer --save-dev`

metro.config.js criar arquivo
```js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
``` 
--------------------------------------------------------------------------------


svg.d.ts criar arquivo svg 

```ts 
declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}
```

--------------------------------------------------------------------------------

# Icons vector 
`import {} from '@expo/vector-icons';`
https://oblador.github.io/react-native-vector-icons/

# Instalação biblioteca dayjs
`npm install dayjs`

importa localização pt-br

criar arquivo dayjs.ts
```ts
import dayjs from 'dayjs';
import 'dayjs/locale/pt-br'

dayjs.locale ('pt-br');
```

# Biblioteca de navegação 
Link:

https://reactnavigation.org/
https://reactnavigation.org/docs/getting-started/

`npm install @react-navigation/native`

`npx expo install react-native-screens react-native-safe-area-context`

https://reactnavigation.org/docs/hello-react-navigation
`npm install @react-navigation/native-stack`


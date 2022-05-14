# Store app with Quasar Framework and Supabase (an open source Firebase alternative)

Small store project being built using [Vue3](https://vuejs.org/), [Supabase](https://supabase.com/docs/) and [Quasar](https://quasar.dev/) framework, based on the application developed in the [tutorial](https://www.youtube.com/playlist?list=PLBjvYfV_TvwIfgvouZCaLtgjYdrWQL02d) available on the [Patrick Monteiro](https://www.youtube.com/c/PatrickMonteiroEng)'s channel.

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Remove/Hide menurbar from electron app (optional)

After generate your electron app with the following command

```bash
quasar dev -m electron
#or
quasar build -m electron
```

Go to your `src-electron\electron-main.js` and add the specified line below

```javascript
mainWindow = new BrowserWindow({
  /*
  some code here
  */
  autoHideMenuBar: true /* <-- add this line */,
  webPreferences: {
    /*
    some code here too
    */
  },
});
```

### Start the app in development mode fot windows/linux

```bash
quasar dev -m electron
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for windows/lionux with electron

```bash
quasar build -m electron
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-webpack/quasar-config-js).

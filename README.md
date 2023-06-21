# ShopSet

ShopSet is a mobile app built with React Native and TypeScript. It allows users to create and save outfit sets by selecting different clothing items.

## Prerequisites

Before running the app, make sure you have the following installed:

- Node.js
- React Native CLI
- Android Studio (for Android development)

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/Reem-Nosbaum/ShopSet.git

   ```

2. Install the dependencies:

   ```shell
   cd ShopSet
   npm install

   ```

3. Start the Metro bundler:

   ```shell
   npm start

   ```

4. For Android, launch the app on the emulator:

   ```shell
   npm run android
   ```

## Folder Structure

The project structure is as follows:

- src: Contains the source code of the application.
- screens: Contains the different screens of the app.
- store: Contains the Redux store configuration and actions.
- styles: Contains global style definitions.
- assets: Contains the images used in the app.
- types: Contains TypeScript type definitions.

## Dependencies

The app uses the following dependencies:

- @react-navigation/native: Navigation library for React Native apps.
- @react-navigation/stack: Stack navigator for React Navigation.
- react-redux: Official Redux binding for React.
- redux: Predictable state container for JavaScript apps.
- axios: Promise-based HTTP client for making API requests.
- redux-persist: Persist and rehydrate a Redux store.
- redux-persist-transform-encrypt: Encrypt and decrypt the persisted state.

For more details about the dependencies and their versions, please refer to the package.json file.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue or submit a pull request.

# Dream Catcher

Dream Catcher is a mobile app that allows users to list out their dreams and add details on how the dreams can be obtained. It also includes a reminder feature to track progress towards achieving each dream.

## Features

- Add dreams: Users can add their dreams to the app along with details on how to achieve them.
- View dream list: The app displays a list of added dreams, including their details.
- Reminder: Users can set reminders to track progress towards each dream.

## Technologies Used

- React Native: A JavaScript framework for building cross-platform mobile apps.
- Firebase: A cloud-based platform for storing and retrieving data.

## Installation

1. Clone the repository:

    `git clone git@github.com:fatjan/dream-catcher.git`


2. Navigate to the project directory:

    `cd dream-catcher`


3. Install dependencies:

    `npm install`


4. Start the app:

    `expo start`

    This will start the Metro bundler and provide options for running the app on different platforms.


5. Follow the instructions for running the app on your desired platform.


## Usage
- Add a new dream by clicking the "Add Dream" button and filling in the form
- View all dreams on the "Dreams List" page
- Edit dream details by clicking on a dream in the "Dreams List" page
- Set reminders for dreams on the "Dream Details" page

## Configuration

Before running the app, make sure to set up Firebase and configure your Firebase project in the app. This involves creating a Firebase project, obtaining the necessary credentials, and configuring Firebase in the app code.

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).

2. Obtain the Firebase configuration credentials (including the Firebase API key, project ID, and other details).

3. Open the `src/firebase.js` file and update the Firebase configuration with your own credentials.

4. Save the changes and proceed with running the app.

Note: For more detailed instructions on Firebase setup, refer to the Firebase documentation.


## Contributing
Contributions are welcome! If you find a bug or have a feature request, please open an issue or create a pull request.


## License
This project is licensed under the [MIT License](LICENSE).

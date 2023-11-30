# 🎙 Pod is in the Details 🎧

Welcome to **Pod is in the Details**, your discerning platform for podcast discovery, where beautiful design meets fascinating content. This platform is designed to be your go-to podcast hub, providing a seamless and enjoyable experience for exploring and listening to your favorite shows.

## Features

### Show Discovery 🚀

- All show data is dynamically loaded via a fetch call from [Podcast API](https://podcast-api.netlify.app/shows).
- Enjoy a loading state while initial data is being loaded and when new data is fetched.
- Preview images of shows are displayed when browsing, giving you a visual preview of what's in store.
- Shows are categorized by genres, providing insights into the variety of content available.

### Detailed Show View 📚

- Explore the details of a show, including information about seasons sorted by number.
- Dive into individual seasons to view episode details, such as the number of episodes and a preview image.
- Listen to any episode in a season directly from the platform.

### Seamless Navigation 🗺️

- Easily toggle between different seasons of the same show.
- View a specific season's episodes and navigate back to the show overview effortlessly.
- Browse a list of all available shows on the platform.

### Favorites Management ❤️

- Mark specific episodes as favorites to easily find and revisit them.
- Access a dedicated view to see all your favorite episodes, grouped by season and show.
- Arrange your favorites by show titles, date updated, and remove episodes as needed.

### Sorting and Filtering 🔍

- Arrange the list of shows by title from A-Z or Z-A.
- Sort shows based on the date they were last updated, in ascending or descending order.
- Filter shows by title through a text input for a quick and efficient search.

### Supabase Authentication 🔒

- Log in seamlessly via [Supabase authentication](https://app.supabase.com) to personalize your experience.

### Technologies Used 🛠️

- Built with **React**
- Utilizes **Material-UI (MUI)** for a sleek and responsive design.
- Implements **react-slick** for the sliding carousel feature.

### Additional Features 🌟

- Discover new shows with a sliding carousel of possible interests on the landing page.
- View human-readable dates for when a show was last updated.

## Getting Started 🚀

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the app locally using `npm start`.
4. Explore, discover, and enjoy your favorite podcasts!

Feel free to contribute, provide feedback, or report issues. Happy podcasting!

**Note:** For authentication to work, ensure you have set up Supabase authentication credentials in your app.
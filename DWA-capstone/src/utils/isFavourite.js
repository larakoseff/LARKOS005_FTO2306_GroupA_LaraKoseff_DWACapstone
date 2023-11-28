export const isFavorite = (favorites, episodeId, showID, season) => {
    const index = favorites.findIndex(
      (fav) =>
        fav.episodeId === episodeId &&
        fav.showID === showID &&
        fav.season === season
    );
    return index !== -1;
  };
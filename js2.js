1

function calculateAverageRatings(movies) {
    const averageRatings = [];
  
    for (const movie of movies) {
      const totalRatings = movie.ratings.reduce((sum, rating) => sum + rating, 0);
      const averageRating = totalRatings / movie.ratings.length;
      averageRatings.push(averageRating.toFixed(2));
    }
  
    return averageRatings;
  }
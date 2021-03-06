import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import MovieSimilar from "../components/movieSimilar";
import MovieRecommendations from "../components/movieRecommendations";
import MovieCast from "../components/movieCast";
import MovieCrew from "../components/movieCrew";
import useMovie from "../hooks/useMovie";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />

       <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/similar`}
              >
                Show Similar Movies(Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Similar Movies
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/similar`}
          render={props => <MovieSimilar movie={movie} {...props} />}
        />
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/recommendations") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/recommendations`}
              >
                Show Recommendations Movies(Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Recommendations Movies
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/recommendations`}
          render={props => <MovieRecommendations movie={movie} {...props} />}
        />
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/cast") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/cast`}
              >
                Show Cast(Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Cast
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/cast`}
          render={props => <MovieCast movie={movie} {...props} />}
        />

         <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/crew") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/crew`}
              >
                Show Crew(Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Crew
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/crew`}
          render={props => <MovieCrew movie={movie} {...props} />}
        />

        
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);/*  */
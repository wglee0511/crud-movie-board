import React, { useEffect, useState } from "react";
import { getAllMovies } from "../api/index";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import Loader from "react-loader";

const Wrapper = styled.div`
  padding: 0 15% 0 15%;
`;

export default function MovieList(props) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await getAllMovies();
        const movieData = data.data.data;
        setMovies(movieData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      {movies.length === 0 && "No movies"}
      {movies.length !== 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th width="20">Rating</th>
              <th>Title</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.rating}</td>
                  <td>{movie.name}</td>
                  <td>{movie.time.join(" / ")}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </Wrapper>
  );
}

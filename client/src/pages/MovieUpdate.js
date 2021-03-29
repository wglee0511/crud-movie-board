import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieById, updateMovie } from "../api";

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
  margin: 5% 15% 10% 15%;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Title = styled.h1.attrs({
  className: "h1",
})``;

const Label = styled.label`
margin 5px
`;

const InputText = styled.input.attrs({
  className: "form-control",
})`
  margin: 5px;
`;

const Button = styled.button.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
  width: 30%;
`;

const DelButton = styled.button.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
  background-color: #d63031;

  width: 30%;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-primary`,
})`
  margin: 15px 15px 15px 5px;
  background-color: #0984e3;
  width: 30%;
`;
export default function MovieUpdate(props) {
  const params = useParams();
  const paraId = params.id;

  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const movieData = await getMovieById(paraId);
        const movie = movieData.data.data;
        setName(movie.name);
        setRating(movie.rating);
        setTime(movie.time);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handleOnChangeName = (event) => {
    const inputName = event.target.value;
    setName(inputName);
  };

  const handleChangeInputRating = (event) => {
    const inputRating = event.target.value;
    setRating(inputRating);
  };

  const handleOnChangeTime = (event) => {
    const inputTime = event.target.value;
    const definedTime = inputTime.split(",");
    setTime(definedTime);
  };

  const handleButtonUpdate = async () => {
    try {
      const body = {
        name,
        rating,
        time: time,
      };
      await updateMovie(paraId, body).then((res) => {
        window.alert("Movie updated successfully");
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteMovie = async () => {};

  return (
    <Wrapper>
      <Title>Update Movie</Title>

      <Label>Name: </Label>
      <InputText type="text" value={name} onChange={handleOnChangeName} />

      <Label>Rating: </Label>
      <InputText
        type="number"
        step="0.1"
        lang="en-US"
        min="0"
        max="10"
        pattern="[0-9]+([,\.][0-9]+)?"
        value={rating}
        onChange={handleChangeInputRating}
      />

      <Label>Time: </Label>
      <InputText
        type="text"
        placeholder="ex) 14:00,15:00"
        value={time}
        onChange={handleOnChangeTime}
      />

      <ButtonWrapper>
        <Button onClick={handleButtonUpdate}>Update</Button>
        <DelButton onClick={handleDeleteMovie}>Delete</DelButton>
        <CancelButton href={"/movie/list"}>Go To list</CancelButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

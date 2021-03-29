import React, { useState } from "react";

import styled from "styled-components";
import { insertMovies } from "../api";

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
  width: 50%;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
  width: 50%;
`;

export default function MovieInsert(props) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [time, setTime] = useState("");

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

  const handleInsertMovie = async () => {
    const body = { name, rating, time: time };

    await insertMovies(body).then((res) => {
      window.alert("Movie inserted successfully");
      setName("");
      setRating("");
      setTime("");
    });
  };

  return (
    <Wrapper>
      <Title>Insert Movie</Title>

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
        <Button onClick={handleInsertMovie}>Insert</Button>
        <CancelButton href={"/movie/list"}>Cancel</CancelButton>
      </ButtonWrapper>
    </Wrapper>
  );
}

import React from "react";

type Props = {
  onAdd: (text: string) => void;
};

const AddTodo = ({ onAdd }: Props) => {
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { text } = e.currentTarget.elements as unknown as {
      text: HTMLInputElement;
    };
    onAdd(text.value);
    text.value = "";
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <input type="text" id="text" />
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodo;

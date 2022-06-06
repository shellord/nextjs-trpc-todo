type Props = {
  id: number;
  text: string;
  onDelete: (id: number) => void;
};

const Todo = ({ id, text, onDelete }: Props) => {
  return (
    <div>
      <p style={{ display: "inline-block" }}>{text}</p>
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default Todo;

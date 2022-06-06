type Props = {
  text: string;
};
const Todo = ({ text }: Props) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default Todo;

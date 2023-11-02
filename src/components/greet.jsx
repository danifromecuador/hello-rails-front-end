import { useSelector } from 'react-redux';

const Message = () => {
  const message = useSelector((state) => state.message);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Message;
import '../modal.css';

const Overlay = ({ children }) => {
  return (
    <div className='modal'>
      <div className='content'>{children}</div>
    </div>
  );
};

export default Overlay;

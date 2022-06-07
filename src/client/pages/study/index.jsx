import { memo } from 'react';

const View = memo((props) => {
  return (
    <div>
      <button onClick={() => {
        alert('Study');
      }}
      >
        按钮
      </button>
      Study
    </div>
  );
});

export default View;

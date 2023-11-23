import { useState } from 'react';
import Child from './Child.jsx';

function Parent() {
  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }

  return (
    <div className="child">
     {data}
      <div className="child">
        <Child childToParent={childToParent}/>
      </div>
    </div>
  );
}

export default Parent;
import React from 'react';
import { useState } from 'react';

const Orders = () => {
  const [admin, setAdmin] = useState(false);
  if (!admin) {
    return;
  }
  return (
    //page is under constructions
    <div>
      {/* Admin Page */}
      Orders
    </div>
  );
};

export default Orders;

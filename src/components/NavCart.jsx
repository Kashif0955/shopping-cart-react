import React from 'react'
import NavCartDetails from './NavCartDetails'
import { img } from 'framer-motion/client';
const img2 =
  "https://media.cnn.com/api/v1/images/stellar/prod/allbirds-sneakers-review-tree-runnerjpg.jpg?c=16x9&q=h_720,w_1280,c_fill";

const NavCart = () => {
  return (
<>
<NavCartDetails
thumbnail={img2}
title={"Something"}
category={'shoes'}
price={1200}
qty={2}
id={"fkdfdjhf"}
/>
</>
  )
}

export default NavCart
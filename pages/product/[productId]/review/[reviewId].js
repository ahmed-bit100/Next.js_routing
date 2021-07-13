import React from 'react';
import {useRouter} from 'next/router';

function ProductDetails() {
  const router = useRouter();
  const {productId, reviewId} = router.query;
  return (
    <div>
      <h1>
        review {reviewId} for product {productId}{' '}
      </h1>
    </div>
  );
}

export default ProductDetails;

import React from 'react';
import {useRouter} from 'next/router';

function Docs() {
  const router = useRouter();
  const {params = []} = router.query;
  console.log(params);

  if (params.length == 2) {
    return (
      <div>
        <h1>
          Viewing docs for {params[0]} and {params[1]}{' '}
        </h1>
      </div>
    );
  } else if (params.length == 1) {
    return <h1>Viewing docs for feature {params[1]} </h1>;
  }
  return <h1>docs home page</h1>;
}

export default Docs;

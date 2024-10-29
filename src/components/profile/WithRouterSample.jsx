import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

const WithRouterSample = () => {
  const location = useLocation();
  //const match = useMatch("/profiles/:username");
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(params)}
        rows={7}
        readOnly={true}
      />
      <br/>
      <button onClick={() => navigate('/')}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
//export default withRouter(WithRouterSample);
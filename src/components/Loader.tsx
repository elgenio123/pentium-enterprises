// LoadingSpinner.js

import { Audio } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <Audio
      height="50"
      width="50"
      color="#17485a"
      ariaLabel="audio-loading"
      visible={true}
    />
  </div>
);

export default Loader;
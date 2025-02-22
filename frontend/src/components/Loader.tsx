// LoadingSpinner.js

import { Audio } from 'react-loader-spinner';

const Loader = () => (
  <div className="flex items-center justify-center w-full h-screen">
    <Audio
      height="5000"
      width="500"
      color="#17485a"
      ariaLabel="audio-loading"
      visible={true}
    />
  </div>
);

export default Loader;
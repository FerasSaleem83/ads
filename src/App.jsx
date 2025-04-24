import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(function () {
        window.googletag.display('div-gpt-ad-1729510663829-0');
      });
    }
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
      {/* Google Ad Container */}
      <div
        id="div-gpt-ad-1729510663829-0"
        style={{ minWidth: '300px', minHeight: '250px' }}
      ></div>
    </div>
  );
}

export default App;

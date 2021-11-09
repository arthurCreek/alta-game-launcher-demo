import React from 'react';
// import { shell } from 'electron';
// import { ipcRenderer } from 'electron';
// import * as child from 'child_process';
import child = require('child_process');

const Home: React.FC = () => {
  const handlePlay = () => {
    const child_p = child.execFile;
    child_p(
      'C:\\Games\\Alta\\A Township Tale\\A Township Tale.exe',
      [],
      function (err: any, data: any) {
        console.log(err);
        console.log(data.toString());
      }
    );
  };

  return (
    <>
      <div
        className="bg-cover bg-no-repeat bg-scroll transform h-screen absolute top-0 z-0 w-full filter blur-sm"
        style={{
          backgroundImage: `url(${require('../assets/att-home-bg.jpg')})`,
        }}
      ></div>
      <div className="w-full alta-min-height-full header-height-margin flex z-10">
        <div className="w-128 h-full alta-play-bg alta-min-height-full fixed">
          <button onClick={handlePlay}>Play</button>
          {/* <a href="C:\\Games\\Alta\\A Township Tale\\A Township Tale.exe">
            Link
          </a> */}
          <p>sdsdkjcbnsdijkcnbdkjcnkdsncskdjcn</p>
        </div>
        <div className="flex-shrink w-home-right max-height-with-header ml-auto mr-0 overflow-y-auto z-10">
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
          <div className="mt-32 mb-32">asdasda</div>
        </div>
      </div>
    </>
  );
};

export default Home;

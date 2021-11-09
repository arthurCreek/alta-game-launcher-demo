import React from 'react';
import child = require('child_process');
import {
  FaDiscord,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTags,
  FaFolderOpen,
  FaEye,
  FaSteam,
  FaCog,
} from 'react-icons/fa';

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
      {/* Background image */}
      <div
        className="bg-cover bg-no-repeat bg-scroll transform h-screen absolute top-0 z-0 w-full filter blur-sm"
        style={{
          backgroundImage: `url(${require('../assets/att-home-bg.jpg')})`,
        }}
      ></div>
      <div className="w-full alta-min-height-full header-height-margin flex z-10">
        {/* Home Left Section */}
        <div className="w-128 h-full alta-play-bg alta-min-height-full fixed flex flex-col gap-6 py-4">
          <img
            src={require('../assets/att-text-logo.png')}
            alt="Township Tale Logo"
            className="w-72 h-auto my-0 mx-auto cursor-pointer"
          />

          <div className="flex justify-around w-64 my-0 mx-auto">
            <FaDiscord className="alta-white text-3xl transition-all transform hover:scale-125 duration-75" />
            <FaReddit className="alta-white text-3xl transition-all transform hover:scale-125 duration-75" />
            <FaYoutube className="alta-white text-3xl transition-all transform hover:scale-125 duration-75" />
            <FaInstagram className="alta-white text-3xl transition-all transform hover:scale-125 duration-75" />
            <FaTwitter className="alta-white text-3xl transition-all transform hover:scale-125 duration-75" />
          </div>

          <webview
            id="youtube"
            src="https://www.youtube.com/embed/Pj27RWR5KOk"
            className="w-112 h-60 my-0 mx-auto"
          ></webview>

          <p className="josefin-font alta-white w-112 my-0 mx-auto">
            Take up your role in this old abandoned town. Fight for survival,
            explore its surrounding regions, and master your profession. What
            will your Township Tale be?
          </p>

          <div className="w-112 flex flex-col gap-2 my-0 mx-auto">
            <div className="flex items-center h-10 cursor-pointer group">
              <FaTags className="text-gray-500 text-2xl h-full py-3 px-3 w-12 bg-gray-300 group-hover:bg-gray-400 group-hover:text-gray-600 rounded-tl-md rounded-bl-md" />
              <p className="text-gray-500 text-sm flex-grow bg-gray-200 group-hover:bg-gray-300 group-hover:text-gray-600 pl-5 h-full flex items-center font-semibold josefin-font rounded-tr-md rounded-br-md">
                Release
              </p>
            </div>
            <div className="flex items-center h-10 cursor-pointer group">
              <FaFolderOpen className="text-gray-500 text-2xl h-full py-3 px-3 w-12 bg-gray-300 group-hover:bg-gray-400 group-hover:text-gray-600 rounded-tl-md rounded-bl-md" />
              <p className="text-gray-500 text-sm flex-grow bg-gray-200 group-hover:bg-gray-300 group-hover:text-gray-600 pl-5 h-full flex items-center font-semibold josefin-font rounded-tr-md rounded-br-md">
                C:\Games\Alta\A Township Tale
              </p>
            </div>
            <div className="flex items-center h-10 cursor-pointer group">
              <FaEye className="text-gray-500 text-2xl h-full py-3 px-3 w-12 bg-gray-300 group-hover:bg-gray-400 group-hover:text-gray-600 rounded-tl-md rounded-bl-md" />
              <p className="text-gray-500 text-sm flex-grow bg-gray-200 group-hover:bg-gray-300 group-hover:text-gray-600 pl-5 h-full flex items-center font-semibold josefin-font rounded-tr-md rounded-br-md">
                SteamVR
              </p>
            </div>
          </div>

          <div className="w-112 mx-auto my-0">
            <p className="text-sm alta-white josefin-font">
              Version: main-0.0.78.8
            </p>
            <p className="text-sm alta-white josefin-font">
              Target Directory: C:\Games\Alta\A Township Tale
            </p>
          </div>

          <div className="flex w-112 my-0 mx-auto items-center justify-between">
            <button
              onClick={handlePlay}
              className="w-88 py-2 font-bold text-lg bg-blue-500 rounded-md alta-white"
            >
              Play
            </button>
            <FaSteam className="alta-white text-3xl cursor-pointer" />
            <FaCog className="alta-white text-3xl cursor-pointer" />
          </div>
        </div>

        {/* Home Right Section */}
        <div className="flex flex-col items-center flex-shrink w-home-right max-height-with-header ml-auto mr-0 overflow-y-auto z-10">
          <div className="w-11/12 h-auto py-8 mx-auto cursor-pointer rounded-lg">
            <img
              src={require('../assets/get-the-starter-pack.jpg')}
              alt="Township Tale Logo"
            />
          </div>
          <div className="w-11/12 h-auto py-8 mx-auto cursor-pointer rounded-lg">
            <img
              src={require('../assets/new-store-rotation.jpg')}
              alt="Township Tale Logo"
            />
          </div>
          {/* Start left/right sections */}
          <div className="w-11/12 h-auto py-8 mx-auto flex">
            <webview
              id="youtube"
              src="https://www.youtube.com/embed/ToQzmt2r2Ic"
              className="w-auto h-96 flex-grow my-0 mx-auto"
            ></webview>

            <div className="w-88 alta-play-bg flex flex-col justify-between items-center p-6">
              <div className="flex flex-col items-center gap-2">
                <h2 className="alta-white text-2xl font-bold text-center">
                  ATT Released on the Quest!
                </h2>
                <div className="flex">
                  <img
                    src={require('../assets/victor.png')}
                    alt="Victor"
                    className="w-10 h-auto"
                  />
                  <p className="alta-white">by Victor</p>
                </div>
                <p className="alta-white">
                  Hello peeps, Victor here bearing good news! After a long year
                  of silence, suspense and mystery, we’ve announced that we were
                  officially working on porting A Township Tale to the Oculus
                  Quest back in March.
                </p>
              </div>

              <div>
                <p className="alta-white text-2xl font-bold cursor-pointer">
                  Read More
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 h-auto py-8 mx-auto flex flex-row-reverse">
            <webview
              id="youtube"
              src="https://www.youtube.com/embed/ToQzmt2r2Ic"
              className="w-auto h-96 flex-grow my-0 mx-auto"
            ></webview>

            <div className="w-88 alta-play-bg flex flex-col justify-between items-center p-6">
              <div className="flex flex-col items-center gap-2">
                <h2 className="alta-white text-2xl font-bold text-center">
                  ATT Released on the Quest!
                </h2>
                <div className="flex">
                  <img
                    src={require('../assets/victor.png')}
                    alt="Victor"
                    className="w-10 h-auto"
                  />
                  <p className="alta-white">by Victor</p>
                </div>
                <p className="alta-white">
                  Hello peeps, Victor here bearing good news! After a long year
                  of silence, suspense and mystery, we’ve announced that we were
                  officially working on porting A Township Tale to the Oculus
                  Quest back in March.
                </p>
              </div>

              <div>
                <p className="alta-white text-2xl font-bold cursor-pointer">
                  Read More
                </p>
              </div>
            </div>
          </div>
          <div className="w-11/12 h-auto py-8 mx-auto flex">
            <webview
              id="youtube"
              src="https://www.youtube.com/embed/ToQzmt2r2Ic"
              className="w-auto h-96 flex-grow my-0 mx-auto"
            ></webview>

            <div className="w-88 alta-play-bg flex flex-col justify-between items-center p-6">
              <div className="flex flex-col items-center gap-2">
                <h2 className="alta-white text-2xl font-bold text-center">
                  ATT Released on the Quest!
                </h2>
                <div className="flex">
                  <img
                    src={require('../assets/victor.png')}
                    alt="Victor"
                    className="w-10 h-auto"
                  />
                  <p className="alta-white">by Victor</p>
                </div>
                <p className="alta-white">
                  Hello peeps, Victor here bearing good news! After a long year
                  of silence, suspense and mystery, we’ve announced that we were
                  officially working on porting A Township Tale to the Oculus
                  Quest back in March.
                </p>
              </div>

              <div>
                <p className="alta-white text-2xl font-bold cursor-pointer">
                  Read More
                </p>
              </div>
            </div>
          </div>

          {/* End left/right sections - Load more */}
          <div className="w-11/12 alta-play-bg rounded-md mb-8 cursor-pointer transform hover:scale-105 transition">
            <p className="alta-white font-bold text-3xl text-center py-4">
              Load Next
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

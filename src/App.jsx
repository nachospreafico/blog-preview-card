import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Frontend from "./assets/images/favicon-32x32.png";
import "./App.css";
import Logo from "./assets/images/illustration-article.svg";
import Avatar from "./assets/images/image-avatar.webp";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <main className="bg-[#f4d04e] h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-white max-w-[325px] md:max-w-[350px] p-5 rounded-xl flex flex-col gap-4 border-2 border-black shadow-[5px_5px_0px_1px_#000000]">
        <img src={Logo} alt="illustration" className="m-auto rounded-xl"></img>

        {/* Card body */}
        <div className="flex flex-col gap-4">
          <p className="bg-[#f4d04e] text-sm p-2 w-fit font-bold rounded-md">
            Learning
          </p>
          <p className="font-medium text-sm">Published 21 Dec 2023</p>
          <h2 className="font-bold text-xl">HTML & CSS foundations</h2>
          <p className="text-[#808080] text-[16px]">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex flex-row items-center gap-4">
            <img
              src={Avatar}
              alt="avatar"
              className="w-10 cursor-pointer"
            ></img>
            <p className="font-bold">Greg Hooper</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col justify-center gap-2 items-center p-4">
        <p className="text-sm">
          Developed by <span className="font-bold">Ignacio Spreafico</span>
        </p>
        <div className="flex flex-row gap-2 items-center justify-center">
          <a
            href="https://www.linkedin.com/in/ignacio-spreafico"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className="text-black lg:hover:text-blue-600 duration-300"
            />
          </a>
          <a href="https://www.github.com/nachospreafico" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              className="text-black lg:hover:text-gray-500 duration-300"
            />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;

import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Explore My Projects on GitHub</h2>
        <p className="text-gray-500 my-2">
          Visit my GitHub profile to see projects I’ve worked on, including web
          and mobile applications.
        </p>
        <a
          href="https://github.com/Vishwaharan?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="self-center"
        >
          <Button
            gradientDuoTone="purpleToPink"
            className="mt-6 rounded-tl-xl w-[400px]"
          >
            View My Projects
          </Button>
        </a>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/blog-915eb.appspot.com/o/assets%2Fproject.png?alt=media&token=7fa61d46-b946-401b-a774-3614d072e8ed"
          alt="GitHub Projects"
        />
      </div>
    </div>
  );
}

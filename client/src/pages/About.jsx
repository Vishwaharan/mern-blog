export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-5">
      <div className="max-w-2xl mx-auto p-6 text-center bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform transform hover:scale-105">
        <h1 className="text-4xl font-semibold text-teal-600 my-6">
          About Vishwa's Blog
        </h1>
        <div className="text-md text-gray-700 dark:text-gray-300 flex flex-col gap-6">
          <p className="text-justify">
            Welcome to Vishwa's Blog! This blog was created by Vishwaharan as a
            personal project to share his insights and ideas with the world.
            Vishwaharan is an enthusiastic IT student and developer with a
            passion for discussing technology, coding, and everything in
            between.
          </p>

          <p className="text-justify">
            On this blog, you’ll find regular articles and tutorials on topics
            like web development, mobile app development, and programming tips.
            As someone who’s always exploring new technologies, Vishwaharan is
            excited to share his learning journey, so be sure to check back for
            fresh content!
          </p>

          <p className="text-justify">
            We encourage you to leave comments on our posts and engage with
            other readers. You can like others' comments and reply to them too.
            Vishwaharan believes that a supportive community of learners can
            help everyone grow and achieve their best.
          </p>
        </div>
      </div>
      <style jsx>{`
        @media (prefers-color-scheme: dark) {
          .transition-transform {
            transition: transform 0.2s ease-in-out;
          }
        }
      `}</style>
    </div>
  );
}

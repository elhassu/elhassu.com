import LearnMore from '../components/LearnMore'

const logos = [
  { name: 'HTML5', url: 'https://media.discordapp.net/attachments/499936620678742059/913908582376939560/html5-logo.png' },
  { name: 'CSS3', url: 'https://media.discordapp.net/attachments/499936620678742059/913908584671236156/css3-logo.png' },
  { name: 'JavaScript', url: 'https://cdn.discordapp.com/attachments/499936620678742059/913908584474095636/javascript-logo.png' },
  { name: 'PHP', url: 'https://media.discordapp.net/attachments/499936620678742059/913908582662168616/php-logo.png' },
  { name: 'C#', url: 'https://media.discordapp.net/attachments/499936620678742059/913908583878496266/csharp-logo.png' },
  { name: 'Java', url: 'https://cdn.discordapp.com/attachments/499936620678742059/913908584180498472/java-logo.png' },
  { name: 'Python', url: 'https://media.discordapp.net/attachments/499936620678742059/913908583362601001/python-logo.png' },
  { name: 'SQL', url: 'https://media.discordapp.net/attachments/499936620678742059/913908583710740481/sql-lopo.png' },
  { name: 'Ionic', url: 'https://cdn.discordapp.com/attachments/499936620678742059/913910842221801512/ionic-logo.png' },
]

export default function Home() {
  return (
    <div className="bg-white animate-fade-in-up">
      <main>
        {/* Hero section */}
        <div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div>
              <div className="mt-44">

                <div className="sm:hidden mt-0 sm:max-w-xl">
                  <h1 className="text-center sm:text-left text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Keelan Vella Zerafa
                  </h1>
                  <p className="text-center sm:text-left mt-6 text-xl text-gray-500">
                    Part-Time Musician
                  </p>
                  <p className="text-center sm:text-left mt-2 text-xl text-gray-500">
                    Full-Time Software Developer
                  </p>
                  <p className="text-center sm:text-left mt-2 text-xl text-gray-500">
                    Enthusiast Luthier
                  </p>
                  <p className="text-center sm:text-left mt-4 text-l text-gray-500">
                    Based in Malta
                  </p>
                </div>
                <div className="hidden sm:block mt-0 sm:max-w-xl">
                  <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                    Keelan Vella Zerafa
                  </h1>
                  <p className="mt-6 text-xl text-gray-500">
                    Part-Time Musician,
                  </p>
                  <p className="mt-2 text-xl text-gray-500">
                    Full-Time Software Developer,
                  </p>
                  <p className="mt-2 text-xl text-gray-500">
                    Enthusiast Luthier
                  </p>
                  <p className="mt-4 text-l text-gray-500">
                    Based in Malta
                  </p>
                </div>
                <LearnMore name={"About Me"} link={"about"}></LearnMore>
              </div>
            </div>
          </div>

          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <div className="hidden sm:hidden md:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width={404}
                  height={392}
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={392} fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
                </svg>
              </div>
              <div className="hidden sm:block relative bg-white pl-4 -mr-40 sm:mx-auto sm:max-w-3xl sm:px-0 lg:max-w-none lg:h-full lg:pl-12">
                <img
                  className="rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
                  src="https://cdn.discordapp.com/attachments/692181081872400394/913578865018937354/Logo.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Programming Languages */}
        <div className="mt-32 p-16">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div>
                <h2 className="text-center sm:text-left text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Programming Languages &amp; Frameworks Fluent In
                </h2>
                <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
                </p>
                <LearnMore name={"Career"} link={"career"}></LearnMore>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-3">
                {logos.map((logo) => (
                  <div key={logo.name} className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                    <img className="max-h-20" src={logo.url} alt={logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Music */}
        <section className="bg-white overflow-hidden p-16">
          <div className="relative max-w-7xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
            <svg
              className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
            </svg>

            <svg
              className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
            </svg>

            <div className="relative lg:flex lg:items-center">
              <div className="hidden lg:block lg:flex-shrink-0">
                <a href="/music">
                  <img
                    className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                    src="https://cdn.discordapp.com/attachments/901690870846337104/901690924227260466/logo.png"
                    alt=""
                  />
                </a>
              </div>

              <div className="relative lg:ml-10">
                <blockquote className="relative">
                  <div className="text-2xl leading-9 font-medium text-gray-900">
                    <h2 className="text-center sm:text-left text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl"> 
                      Guitarist, Vocalist &amp; <br/> Songwriter at
                    </h2>
                    <p className="text-center sm:text-left">
                      The local Maltese Heavy Metal band called "Vectis"
                    </p>
                    <LearnMore name={"Music"} link={"/music"}></LearnMore>
                  </div>

                  <div className="grid justify-items-center lg:hidden">
                    <a href="/music">
                      <img
                        className="h-60 w-60 sm:h-80 sm:w-80 rounded-full"
                        src="https://cdn.discordapp.com/attachments/901690870846337104/901690924227260466/logo.png"
                        alt=""
                      />
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
        
        {/* Zenistar Guitars */}
        <div className="sm:mb-32 p-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
              <div className="text-2xl leading-9 font-medium text-gray-900">
                <h2 className="text-center sm:text-left text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Keelan's Luthier Page
                </h2>
                <p className="text-center sm:text-left">
                  All guitar related personal projects
                </p>
              </div>
              <div className="mt-12 grid p-4 justify-items-center rounded">
                <a href="/music">
                  <img
                    className="h-60 w-60 sm:h-80 sm:w-80 rounded-full"
                    src="https://cdn.discordapp.com/attachments/913935178899021824/913938200827940925/small_logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

import Link from 'next/link';

export default function CTASection() {
  return (
      <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
              <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                  
                  <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                      <h3 className="text-indigo-600 font-semibold">
                          Services Professionnels
                      </h3>
                      <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                          Trouvez les talents parfaits pour votre entreprise
                      </p>
                      <p className="mt-3 text-gray-600">
                          Chez Jobs4Talents, nous offrons des services de recrutement de pointe pour vous aider à trouver les meilleurs talents. Notre équipe d'experts est là pour vous accompagner dans chaque étape du processus de recrutement.
                      </p>
                      <Link href="/services" legacyBehavior>
                          <a className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                              En savoir plus
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                              </svg>
                          </a>
                      </Link>
                  </div>
                  <div className="flex-1 sm:hidden lg:block">
                      <img src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" className="md:max-w-lg sm:rounded-lg" alt="Recruitment" />
                  </div>
              </div>
          </div>
      </section>
  );
}

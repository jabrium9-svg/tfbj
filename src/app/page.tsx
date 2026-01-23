export default function Home() {
  return (
    <main className="min-h-screen bg-texture">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center section-padding bg-fold-warmWhite">
        <div className="container-content text-center">
          {/* Wordmark */}
          <h1 className="text-display md:text-[4.5rem] font-serif text-fold-green mb-6 tracking-tight">
            The Fold
          </h1>

          {/* Tagline */}
          <p className="text-heading font-serif text-fold-gold mb-8">
            Stay connected to your flock
          </p>

          {/* Subhead */}
          <p className="text-body-lg text-fold-stone max-w-xl mx-auto mb-12 leading-relaxed">
            Conversational continuity for religious leaders.
            <br className="hidden sm:block" />
            Because pastoral care doesn&apos;t end at the church door.
          </p>

          {/* CTA */}
          <a href="#get-started" className="btn-primary">
            Bring your congregation in
          </a>
        </div>

        {/* Decorative divider */}
        <div className="container-content mt-20">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-fold-goldLight"></div>
            <div className="w-2 h-2 rounded-full bg-fold-gold opacity-60"></div>
            <div className="h-px w-16 bg-fold-goldLight"></div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-fold-cream">
        <div className="container-content">
          <h2 className="text-heading font-serif text-fold-green text-center mb-4">
            The distance is growing
          </h2>
          <p className="text-fold-stone text-center mb-16 max-w-lg mx-auto">
            Your congregation needs you. But the tools keep getting in the way.
          </p>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-fold-warmWhite p-8 rounded-sm border border-fold-stoneLight">
              <div className="w-12 h-12 bg-fold-goldLight rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-fold-green mb-3">Digital fatigue is real</h3>
              <p className="text-fold-stone leading-relaxed">
                Your congregation is drowning in emails, notifications, and apps.
                Your carefully crafted message gets lost in the noise—another unread
                notification in a sea of demands.
              </p>
            </div>

            <div className="bg-fold-warmWhite p-8 rounded-sm border border-fold-stoneLight">
              <div className="w-12 h-12 bg-fold-goldLight rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-fold-green mb-3">Timing matters</h3>
              <p className="text-fold-stone leading-relaxed">
                Life events don&apos;t wait—funerals, crises, moments of grief.
                When someone needs pastoral care, they need to know you&apos;re there.
                But emails get forgotten. Calls go unanswered.
              </p>
            </div>

            <div className="bg-fold-warmWhite p-8 rounded-sm border border-fold-stoneLight">
              <div className="w-12 h-12 bg-fold-goldLight rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-fold-green mb-3">Context gets lost</h3>
              <p className="text-fold-stone leading-relaxed">
                You remember the conversation from months ago. You remember their
                struggle, their question, their moment of doubt. But where does that
                continuity live? In scattered emails and fading memory.
              </p>
            </div>

            <div className="bg-fold-warmWhite p-8 rounded-sm border border-fold-stoneLight">
              <div className="w-12 h-12 bg-fold-goldLight rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-fold-green mb-3">Tools built for selling, not shepherding</h3>
              <p className="text-fold-stone leading-relaxed">
                Email marketing, CRMs, social media—these tools were built to
                sell products, not nurture souls. Pastoral care deserves better
                than a sales funnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-padding bg-fold-green text-fold-cream">
        <div className="container-content">
          <h2 className="text-heading font-serif text-fold-cream text-center mb-4">
            A thread that never breaks
          </h2>
          <p className="text-fold-greenMuted text-center mb-16 max-w-lg mx-auto opacity-80">
            The Fold gives you conversational continuity—pastoral care that
            persists across days, weeks, and seasons.
          </p>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-fold-greenLight rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-serif text-fold-cream mb-2">Voice-first communication</h3>
                <p className="text-fold-cream opacity-80 leading-relaxed">
                  Your congregants hear from you in their own time—your actual voice,
                  speaking to them personally. They can respond with their voice too,
                  naturally and personally, without the pressure of typing the perfect reply.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-fold-greenLight rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-serif text-fold-cream mb-2">The conversation continues</h3>
                <p className="text-fold-cream opacity-80 leading-relaxed">
                  No more starting over. No more &quot;I meant to respond but forgot.&quot;
                  The thread persists—a running conversation across days, weeks, months.
                  Pastoral care as it should be: continuous, not episodic.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 bg-fold-greenLight rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-serif text-fold-cream mb-2">Manage through conversation</h3>
                <p className="text-fold-cream opacity-80 leading-relaxed">
                  No complex dashboards to learn. No endless clicking through menus.
                  You manage everything through natural conversation with an AI assistant
                  that understands pastoral work. Just talk, and let the system handle the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-fold-warmWhite">
        <div className="container-wide">
          <h2 className="text-heading font-serif text-fold-green text-center mb-4">
            Simple by design
          </h2>
          <p className="text-fold-stone text-center mb-16 max-w-lg mx-auto">
            Getting started takes minutes, not weeks. Here&apos;s how it works.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-fold-gold">1</span>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">Sign up and choose your style</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                Pick from curated color schemes and fonts that reflect your
                community&apos;s character. Minimal choices, maximum dignity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-fold-gold">2</span>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">Invite your congregation</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                Share a link in your bulletin, send an email, announce it from the
                pulpit. However you communicate, your flock can find their way in.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-fold-gold">3</span>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">Send messages that matter</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                Funeral announcements, pastoral check-ins, words of comfort—speak
                them in your voice. Your congregation receives them in their time.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif text-fold-gold">4</span>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">Receive and respond</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                Voice responses flow back to you. Continue the conversation.
                The thread persists. Pastoral care, unbroken.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Your Congregation Section */}
      <section className="section-padding bg-fold-blueLight">
        <div className="container-content">
          <h2 className="text-heading font-serif text-fold-green text-center mb-4">
            For your congregation
          </h2>
          <p className="text-fold-stone text-center mb-16 max-w-lg mx-auto">
            They don&apos;t need to learn a new system. They just need to listen and respond.
          </p>

          <div className="bg-fold-warmWhite p-8 md:p-12 rounded-sm border border-fold-stoneLight">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-xl font-serif text-fold-green mb-6">Their experience is simple</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-fold-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-fold-warmWhite" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-fold-stone">Download Jabrium and see your thread from their shepherd</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-fold-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-fold-warmWhite" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-fold-stone">Listen when they&apos;re ready—no pressure, no guilt</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-fold-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-fold-warmWhite" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-fold-stone">Respond with their voice—natural, personal, human</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-fold-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-fold-warmWhite" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-fold-stone">The conversation continues across days, weeks, seasons</span>
                  </li>
                </ul>
              </div>
              <div className="bg-fold-cream p-8 rounded-sm">
                <p className="text-fold-stone italic text-lg leading-relaxed font-serif">
                  &quot;Pastoral care that fits their life, not the other way around.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-fold-cream">
        <div className="container-content">
          <h2 className="text-heading font-serif text-fold-green text-center mb-4">
            Built on trust
          </h2>
          <p className="text-fold-stone text-center mb-16 max-w-lg mx-auto">
            Your relationship with your congregation is sacred. We don&apos;t get in the way.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">Your branding, your voice</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                Choose from curated colors and fonts that reflect your community.
                Your congregation sees you, not us.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">Privacy protected</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                No social load. No visible groups. No one knows who else is in
                the fold. Just you and them, in conversation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-fold-goldLight rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-7 h-7 text-fold-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-serif text-fold-green mb-3">We get out of the way</h3>
              <p className="text-fold-stone text-sm leading-relaxed">
                Jabrium doesn&apos;t hoard attention or create dependency.
                We help you connect, then step aside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="section-padding bg-fold-green">
        <div className="container-content text-center">
          <h2 className="text-heading font-serif text-fold-cream mb-4">
            Bring your congregation in
          </h2>
          <p className="text-fold-cream opacity-80 mb-10 max-w-md mx-auto">
            Pastoral care that persists. The conversation that never ends.
          </p>
          <a href="#" className="inline-flex items-center justify-center px-10 py-5 bg-fold-gold text-fold-green font-sans font-medium rounded-sm hover:bg-fold-goldMuted transition-colors duration-200 text-lg tracking-wide">
            Get started with The Fold
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding-sm bg-fold-stoneDark text-fold-stoneLight">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="font-serif text-fold-cream text-lg mb-1">The Fold</p>
              <p className="text-sm opacity-70">A Jabrium Engage Property</p>
            </div>

            <nav className="flex flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="hover:text-fold-cream transition-colors">About</a>
              <a href="#" className="hover:text-fold-cream transition-colors">Contact</a>
              <a href="#" className="hover:text-fold-cream transition-colors">Terms</a>
              <a href="#" className="hover:text-fold-cream transition-colors">Privacy</a>
            </nav>
          </div>

          <div className="mt-8 pt-8 border-t border-fold-stone border-opacity-30 text-center text-sm opacity-60">
            <p>&copy; {new Date().getFullYear()} Jabrium. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

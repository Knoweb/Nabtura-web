import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CookiePreferencesButton from "@/components/layout/CookiePreferencesButton";

export const metadata = {
  title: "Cookie Policy | NABTURA",
  description: "Cookie Policy for the NABTURA website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <Link href="/" className="inline-flex items-center text-xs font-bold tracking-widest text-nabtura-green hover:text-white transition-colors uppercase mb-8 group">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            COOKIE POLICY
          </h1>
          <p className="text-nabtura-green font-mono text-sm">
            Last Updated: September 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-green max-w-none space-y-8 font-light text-gray-300 leading-relaxed">
          <div className="text-lg text-white font-normal space-y-4 mb-12">
            <p>
              This Cookie Policy explains how the NABTURA website uses or may use cookies and similar technologies.
            </p>
            <p>
              NABTURA is a business of INFORGRID FZC, registered in Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
            </p>
            <p>
              This Policy should be read together with our <Link href="/legal/privacy-policy" className="text-nabtura-green hover:underline">Privacy Policy</Link>.
            </p>
          </div>

          <Section title="1. WHAT ARE COOKIES?">
            <p>
              Cookies are small files or pieces of information that may be stored on or accessed from your device when you visit a website.
            </p>
            <p className="mt-4">
              Cookies and similar technologies can help websites operate securely, remember choices, provide functionality and understand how visitors use a website.
            </p>
          </Section>

          <Section title="2. HOW NABTURA USES COOKIES">
            <p>
              Depending on the technologies implemented on the live website, NABTURA may use cookies or similar technologies for:
            </p>
            <ul className="space-y-4 mt-4 list-none pl-0">
              <ListItem title="ESSENTIAL WEBSITE OPERATION">
                Security, forms, sessions and core website functionality.
              </ListItem>
              <ListItem title="FUNCTIONALITY">
                Remembering certain preferences or supporting enhanced website features.
              </ListItem>
              <ListItem title="ANALYTICS">
                Understanding website traffic, navigation, interactions and performance.
              </ListItem>
              <ListItem title="MARKETING">
                Measuring campaigns or supporting relevant marketing functionality where implemented and permitted.
              </ListItem>
            </ul>
          </Section>

          <Section title="3. COOKIE CATEGORIES">
            <div className="space-y-8">
              
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase">STRICTLY NECESSARY</h3>
                  <span className="text-[10px] font-bold text-nabtura-green tracking-widest uppercase px-2 py-1 bg-nabtura-green/10 rounded-sm">ALWAYS ACTIVE</span>
                </div>
                <p>These technologies are required for the website to operate or provide functionality requested by the visitor.</p>
                <p className="mt-2">Where applicable, they remain active because the website cannot function properly without them.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase">FUNCTIONAL</h3>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase px-2 py-1 bg-white/5 rounded-sm">Preference: ON / OFF</span>
                </div>
                <p>Functional technologies may remember preferences or support enhanced website experiences.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase">ANALYTICS</h3>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase px-2 py-1 bg-white/5 rounded-sm">Preference: ON / OFF</span>
                </div>
                <p>Analytics technologies may help us understand:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-400 marker:text-nabtura-green">
                  <li>Which pages visitors use</li>
                  <li>How visitors navigate</li>
                  <li>How website features perform</li>
                  <li>Where visitors encounter problems</li>
                  <li>General website usage patterns</li>
                </ul>
                <p className="mt-4">This information helps improve the NABTURA digital experience.</p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-sm font-bold text-white tracking-widest uppercase">MARKETING</h3>
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase px-2 py-1 bg-white/5 rounded-sm">Preference: ON / OFF</span>
                </div>
                <p>If implemented, marketing technologies may help measure campaign effectiveness or support relevant advertising and marketing activity.</p>
              </div>

            </div>
          </Section>

          <Section title="4. INTERACTIVE WEBSITE FUNCTIONALITY">
            <p>NABTURA's website includes interactive tools and selectors.</p>
            <p className="mt-4">
              Certain temporary or functional technologies may be used to remember choices during a website journey—for example:
            </p>
            <div className="bg-[#0A1F12] border border-nabtura-green/20 text-nabtura-green font-mono text-sm p-4 rounded-xl my-4 text-center">
              SPACE → OBJECTIVE → POSSIBILITY → ENQUIRY
            </div>
            <p>
              This allows the website to follow our UX principle:
            </p>
            <p className="font-bold text-white tracking-widest text-sm uppercase my-4">
              SELECT ONCE. CARRY IT FORWARD.
            </p>
            <p>
              Where such functionality requires non-essential storage or cookies, it should operate according to the visitor's applicable cookie choices and legal requirements.
            </p>
          </Section>

          <Section title="5. THIRD-PARTY TECHNOLOGIES">
            <p>The website may use third-party technologies for functions such as:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4 leading-relaxed">
              ANALYTICS • MAPS • VIDEO • CRM • FORMS • COMMUNICATIONS • SOCIAL MEDIA • MARKETING MEASUREMENT
            </p>
            <p>
              Third-party providers may process information according to their own privacy and cookie policies.
            </p>
            <p className="mt-4">
              The actual third-party technologies used by NABTURA should be identified and configured before the website launches.
            </p>
          </Section>

          <Section title="6. YOUR COOKIE CHOICES">
            <p>Where applicable, you can manage optional cookies through:</p>
            <div className="my-4">
              <CookiePreferencesButton />
            </div>
            <p className="mt-4">You can choose whether to allow categories such as:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>FUNCTIONAL</li>
              <li>ANALYTICS</li>
              <li>MARKETING</li>
            </ul>
            <p className="mt-4">
              Strictly necessary technologies required for core website operation cannot normally be disabled through the website's preference tool.
            </p>
          </Section>

          <Section title="7. CHANGING YOUR PREFERENCES">
            <p>You can return to:</p>
            <div className="my-4">
              <CookiePreferencesButton />
            </div>
            <p className="mt-4">from the website footer to review or change available choices.</p>
            <p className="mt-4">You may also be able to control cookies through your browser settings. Blocking certain technologies may affect website functionality.</p>
          </Section>

          <Section title="8. CONSENT AND OPTIONAL TECHNOLOGIES">
            <p>
              Where consent is required under applicable law, optional technologies requiring such consent should not be activated until the appropriate choice has been made.
            </p>
            <p className="mt-4">
              Where consent is the basis for processing, visitors should be able to change or withdraw their choice through the website's cookie preference mechanism.
            </p>
          </Section>

          <Section title="9. COOKIE RETENTION">
            <p>Different cookies may remain for different periods.</p>
            <p className="mt-4">
              Some expire when the browsing session ends, while others may remain for a defined period to remember settings or perform their intended function.
            </p>
            <p className="mt-4">
              The final cookie-management system should maintain an accurate list of the cookies and similar technologies actually used, including their purpose and duration where appropriate.
            </p>
          </Section>

          <Section title="10. CHANGES TO THIS COOKIE POLICY">
            <p>
              We may update this Policy when our website technology, providers or applicable requirements change.
            </p>
            <p className="mt-4">The latest version will be published here with its updated date.</p>
          </Section>

          <Section title="11. CONTACT">
            <p className="mb-4">For privacy or cookie-related questions:</p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-1 text-sm">
              <p className="font-bold text-white tracking-widest uppercase">NABTURA</p>
              <p>A business of INFORGRID FZC</p>
              <p>Registered in Sharjah Publishing City Free Zone</p>
              <p>Sharjah, United Arab Emirates</p>
              <div className="pt-4 space-y-2">
                <p>Email: <a href="mailto:info@nabtura.com" className="text-nabtura-green hover:underline">info@nabtura.com</a></p>
                <p>Website: <a href="https://www.nabtura.com" target="_blank" rel="noopener noreferrer" className="text-nabtura-green hover:underline">www.nabtura.com</a></p>
              </div>
            </div>
          </Section>

        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pt-8 border-t border-white/10">
      <h2 className="text-xl font-bold text-white tracking-wide mb-6">{title}</h2>
      <div className="text-base text-gray-300">
        {children}
      </div>
    </div>
  );
}

function ListItem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-nabtura-green/30 transition-colors">
      <span className="font-bold text-white text-xs tracking-widest uppercase shrink-0 sm:w-48">
        {title}
      </span>
      <span className="text-gray-400">
        {children}
      </span>
    </li>
  );
}

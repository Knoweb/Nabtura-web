import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | NABTURA",
  description: "NABTURA Privacy Policy - How we handle your personal data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
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
            PRIVACY POLICY
          </h1>
          <p className="text-nabtura-green font-mono text-sm">
            Last Updated: Sep 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-green max-w-none space-y-8 font-light text-gray-300 leading-relaxed">
          <div className="text-lg text-white font-normal space-y-4 mb-12">
            <p>
              NABTURA respects your privacy and is committed to handling personal data responsibly and transparently.
            </p>
            <p>
              NABTURA is a business of INFORGRID FZC, a company registered in Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
            </p>
            <p>
              This Privacy Policy explains how we may collect, use, store, disclose and otherwise process personal data when you visit the NABTURA website, use our interactive tools, contact us, submit an enquiry, provide project information, upload materials or otherwise interact with NABTURA.
            </p>
          </div>

          <Section title="1. WHO IS RESPONSIBLE FOR YOUR DATA?">
            <p>
              For the purposes of this website and the personal data processed through it, INFORGRID FZC is responsible for the processing of personal data in connection with NABTURA, subject to applicable law.
            </p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mt-4 space-y-1 text-sm">
              <p className="font-bold text-white tracking-widest uppercase">NABTURA</p>
              <p>A business of INFORGRID FZC</p>
              <p>Sharjah Publishing City Free Zone</p>
              <p>Sharjah, United Arab Emirates</p>
              <p className="pt-2">Email: <a href="mailto:info@nabtura.com" className="text-nabtura-green hover:underline">info@nabtura.com</a></p>
              <p>Phone / WhatsApp: <a href="tel:+971569300075" className="text-nabtura-green hover:underline">+971 56 9300075</a></p>
            </div>
          </Section>

          <Section title="2. INFORMATION WE MAY COLLECT">
            <p>The information we collect depends on how you interact with NABTURA. It may include:</p>
            <ul className="space-y-4 mt-4 list-none pl-0">
              <ListItem title="CONTACT INFORMATION">Name, email address, telephone or WhatsApp number.</ListItem>
              <ListItem title="BUSINESS INFORMATION">Company, organization, role or business-related information you choose to provide.</ListItem>
              <ListItem title="PROJECT INFORMATION">Project type, location, site, land or space information, requirements, objectives, project stage and other information relevant to your enquiry.</ListItem>
              <ListItem title="INTERACTIVE TOOL INFORMATION">Selections made through NABTURA's solution finders, growing tools, possibility selectors, mini-selectors and enquiry router.</ListItem>
              <ListItem title="UPLOADED MATERIALS">Photographs, site plans, drawings, project briefs or other files you voluntarily provide.</ListItem>
              <ListItem title="COMMUNICATION INFORMATION">Messages, enquiries, correspondence and preferred method of contact.</ListItem>
              <ListItem title="TECHNICAL AND USAGE INFORMATION">Depending on the technologies implemented on the website, this may include IP address, browser type, device information, pages visited, interactions, referral information and similar website usage information.</ListItem>
              <ListItem title="COOKIE INFORMATION">Information collected through cookies and similar technologies, where applicable.</ListItem>
            </ul>
          </Section>

          <Section title="3. WHY WE PROCESS YOUR INFORMATION">
            <p>
              We may process personal data where permitted under applicable law and where necessary for legitimate business purposes associated with your interaction with NABTURA. This may include:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>Responding to your enquiry</li>
              <li>Understanding your project, space, land, requirements or objectives</li>
              <li>Identifying potentially relevant NABTURA solutions</li>
              <li>Preparing for project or commercial discussions</li>
              <li>Communicating with you about an existing enquiry</li>
              <li>Managing prospective and existing business relationships</li>
              <li>Exploring investment or partnership opportunities</li>
              <li>Coordinating with relevant specialists, suppliers or project partners</li>
              <li>Operating and improving our website</li>
              <li>Improving our solutions and customer experience</li>
              <li>Maintaining website and information security</li>
              <li>Conducting permitted analytics</li>
              <li>Maintaining appropriate business records</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>
            <p className="mt-4">
              Where applicable law requires consent for a particular processing activity, we will seek that consent. The UAE PDPL contains requirements concerning processing of personal data and circumstances in which consent or other lawful grounds may apply.
            </p>
          </Section>

          <Section title="4. NABTURA INTERACTIVE TOOLS">
            <p>Our website may provide interactive experiences including:</p>
            <ul className="list-disc pl-5 mt-4 mb-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>Find Your NABTURA Solution</li>
              <li>What Can I Grow?</li>
              <li>Microgreens Explorer</li>
              <li>What Could My Space Become?</li>
              <li>Smart Enquiry Router</li>
            </ul>
            <p>
              We may use the selections you make to personalize your website journey and help identify potentially relevant solutions. For example:
            </p>
            <div className="bg-[#0A1F12] border border-nabtura-green/20 text-nabtura-green font-mono text-sm p-4 rounded-xl my-4">
              Hotel / Resort → Dine → Chef Garden → UAE
            </div>
            <p>
              may be carried forward when you choose to contact NABTURA. This allows us to avoid asking you repeatedly for information you have already provided during the same website journey.
            </p>
            <p className="mt-4 italic text-sm text-gray-500">
              Interactive results are provided for initial exploration and do not constitute final technical, agricultural, engineering, financial or investment advice.
            </p>
          </Section>

          <Section title="5. PROJECT FILES AND MATERIALS">
            <p>You may choose to upload or provide:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4">
              PHOTOS • SITE PLANS • DRAWINGS • PROJECT BRIEFS • OTHER PROJECT INFORMATION
            </p>
            <p>
              We will use these materials primarily to understand, assess and respond to your enquiry or potential project. You should only provide materials that you are authorized to share.
            </p>
            <p className="mt-2 font-medium text-white">
              Please avoid submitting unnecessary confidential, highly sensitive or personal information through general website enquiry forms.
            </p>
          </Section>

          <Section title="6. HOW WE MAY SHARE INFORMATION">
            <p>We do not sell personal data as a business activity.</p>
            <p className="mt-4">Where reasonably necessary, information may be shared with:</p>
            <ul className="list-disc pl-5 mt-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>Authorized personnel working with NABTURA or INFORGRID FZC</li>
              <li>Website, hosting and IT service providers</li>
              <li>CRM and communication service providers</li>
              <li>Professional advisers</li>
              <li>Consultants and specialists</li>
              <li>Suppliers, contractors and project partners</li>
              <li>Technology providers</li>
              <li>Other parties involved in assessing or delivering a project or opportunity</li>
              <li>Government, regulatory, judicial or law-enforcement authorities where required or permitted by law</li>
            </ul>
            <p className="mt-4">
              We aim to limit sharing to what is reasonably necessary for the relevant purpose.
            </p>
          </Section>

          <Section title="7. SERVICE PROVIDERS">
            <p>We may use third-party providers to support functions such as:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4">
              HOSTING • EMAIL • WEBSITE FORMS • CRM • ANALYTICS • SECURITY • COMMUNICATIONS • FILE STORAGE
            </p>
            <p>
              Where these providers process personal data on our behalf, we will seek to use appropriate arrangements consistent with applicable requirements. The exact providers used by the live website should be reflected in our internal privacy and data-management documentation.
            </p>
          </Section>

          <Section title="8. INTERNATIONAL DATA TRANSFERS">
            <p>
              Some technology providers, project partners or service providers may process or store information outside the United Arab Emirates.
            </p>
            <p className="mt-4">
              Where personal data is transferred internationally, we will seek to handle such transfers in accordance with applicable UAE data-protection requirements. The UAE PDPL specifically addresses transfers outside the UAE, including circumstances involving an adequate level of protection and mechanisms that may apply where such protection is not available.
            </p>
          </Section>

          <Section title="9. HOW LONG WE KEEP INFORMATION">
            <p>
              We retain personal data only for as long as reasonably necessary for the purpose for which it was collected or as otherwise required or permitted by applicable law.
            </p>
            <p className="mt-4">The appropriate period may depend on factors such as:</p>
            <ul className="list-disc pl-5 mt-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>Nature of the enquiry</li>
              <li>Whether a project progresses</li>
              <li>Existing or potential business relationship</li>
              <li>Contractual requirements</li>
              <li>Legal or regulatory obligations</li>
              <li>Record-keeping requirements</li>
              <li>Dispute or security considerations</li>
            </ul>
            <p className="mt-4">
              Information that is no longer reasonably required should be deleted, anonymized or otherwise handled appropriately in accordance with our data-management practices.
            </p>
          </Section>

          <Section title="10. DATA SECURITY">
            <p>
              We take reasonable technical and organizational measures intended to protect personal data against unauthorized or unlawful access, loss, misuse, alteration or disclosure.
            </p>
            <p className="mt-4">
              However, no website, internet transmission or electronic storage system can be guaranteed to be completely secure. Visitors should therefore use reasonable care when transmitting information online.
            </p>
          </Section>

          <Section title="11. YOUR PRIVACY RIGHTS">
            <p>
              Depending on applicable law and the circumstances, you may have rights relating to your personal data.
            </p>
            <p className="mt-4">
              These may include rights to request information concerning processing and, where applicable, request correction, deletion, restriction or transfer of data, object to certain processing, or withdraw consent where processing is based on consent. Certain rights may be subject to legal exceptions or limitations.
            </p>
            <div className="mt-6">
              <p className="font-bold text-white text-sm mb-2 uppercase tracking-widest">To submit a privacy request:</p>
              <a href="mailto:info@nabtura.com" className="inline-block bg-white/5 border border-white/10 hover:border-nabtura-green hover:bg-nabtura-green/5 text-white px-6 py-3 rounded-full transition-all text-sm">
                info@nabtura.com
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 italic">
              We may request reasonable information to verify your identity before acting on a request.
            </p>
          </Section>

          <Section title="12. MARKETING COMMUNICATIONS">
            <p>
              Where we send electronic marketing communications, we will do so in accordance with applicable requirements.
            </p>
            <p className="mt-4">
              You may request to stop receiving marketing communications at any time by using an available unsubscribe mechanism or contacting: <a href="mailto:info@nabtura.com" className="text-nabtura-green hover:underline">info@nabtura.com</a>
            </p>
            <p className="mt-4">
              Stopping marketing communications does not necessarily prevent communications relating to an active enquiry, project, transaction or business relationship.
            </p>
          </Section>

          <Section title="13. WHATSAPP AND OTHER COMMUNICATION CHANNELS">
            <p>
              If you choose to communicate with NABTURA through WhatsApp or another third-party communication platform, your use of that platform is also subject to the provider's own terms and privacy practices.
            </p>
            <p className="mt-4">
              Information you send to NABTURA through those channels may be retained as part of our business communications where appropriate.
            </p>
          </Section>

          <Section title="14. THIRD-PARTY WEBSITES">
            <p>
              The website may contain links to third-party websites or services. Their privacy and security practices are outside our control.
            </p>
            <p className="mt-4">
              We encourage visitors to review the relevant privacy policies before providing information through external services.
            </p>
          </Section>

          <Section title="15. COOKIES AND SIMILAR TECHNOLOGIES">
            <p>
              The NABTURA website may use cookies and similar technologies for essential functionality and, depending on your choices and the website configuration, functionality, analytics or marketing purposes.
            </p>
            <p className="mt-4">
              Please see our <Link href="/legal/cookie-policy" className="text-nabtura-green hover:underline">Cookie Policy</Link> for further information.
            </p>
          </Section>

          <Section title="16. CHANGES TO THIS PRIVACY POLICY">
            <p>
              We may update this Privacy Policy to reflect changes to our website, technology, business activities, service providers or applicable requirements.
            </p>
            <p className="mt-4">
              The current version will be published on this page with its latest update date.
            </p>
          </Section>

          <Section title="17. CONTACT US">
            <p className="mb-4">For privacy questions or requests:</p>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl space-y-1 text-sm">
              <p className="font-bold text-white tracking-widest uppercase">NABTURA</p>
              <p>A business of INFORGRID FZC</p>
              <p>Registered in Sharjah Publishing City Free Zone</p>
              <p>Sharjah, United Arab Emirates</p>
              <div className="pt-4 space-y-2">
                <p>Email: <a href="mailto:info@nabtura.com" className="text-nabtura-green hover:underline">info@nabtura.com</a></p>
                <p>Phone / WhatsApp: <a href="tel:+971569300075" className="text-nabtura-green hover:underline">+971 56 9300075</a></p>
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

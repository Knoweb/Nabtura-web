import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Terms of Use | NABTURA",
  description: "Terms of Use governing your access to and use of the NABTURA website.",
};

export default function TermsOfUsePage() {
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
            TERMS OF USE
          </h1>
          <p className="text-nabtura-green font-mono text-sm">
            Last Updated: September 2026
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert prose-green max-w-none space-y-8 font-light text-gray-300 leading-relaxed">
          <div className="text-lg text-white font-normal space-y-4 mb-12">
            <p>
              These Terms of Use govern your access to and use of the NABTURA website.
            </p>
            <p>
              NABTURA is a business of INFORGRID FZC, registered in Sharjah Publishing City Free Zone, Sharjah, United Arab Emirates.
            </p>
            <p>
              By accessing or using this website, you agree to these Terms of Use and applicable laws. If you do not agree with these Terms, please discontinue use of the website.
            </p>
          </div>

          <Section title="1. PURPOSE OF THE WEBSITE">
            <p>The NABTURA website provides information and interactive experiences relating to:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4 leading-relaxed">
              SMART AGRICULTURE • INTELLIGENT WATER • GREEN SOLUTIONS • ENVIRONMENTAL PROJECTS • RELATED SERVICES • INVESTMENT & PARTNERSHIP OPPORTUNITIES
            </p>
            <p>
              The website is primarily an information, exploration and enquiry platform.
            </p>
            <p className="mt-4 text-white font-medium">
              Unless expressly stated otherwise, it is not an e-commerce platform and website content does not constitute a binding offer, quotation, contract or commitment.
            </p>
          </Section>

          <Section title="2. NABTURA SOLUTIONS ARE PROJECT-SPECIFIC">
            <p>NABTURA follows the principle:</p>
            <p className="font-bold text-nabtura-green tracking-widest text-sm uppercase my-4">
              SMART. CONTROLLED. ADAPTED.
            </p>
            <p>Solutions may depend on factors including:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4 leading-relaxed">
              LOCATION • CLIMATE • WATER • CROP • PLANT • LAND • SPACE • SCALE • PURPOSE • TECHNOLOGY • MANAGEMENT • COMMERCIAL OBJECTIVE
            </p>
            <p>
              Website information should therefore not be interpreted as confirmation that a particular solution is technically, commercially or environmentally suitable for your project.
            </p>
            <p className="mt-4">
              Final recommendations may require assessment, design, technical evaluation and separate commercial agreement.
            </p>
          </Section>

          <Section title="3. INTERACTIVE TOOLS">
            <p>
              NABTURA provides interactive tools to help visitors explore possibilities and identify potential starting points. These may include solution finders, crop and microgreen explorers, possibility selectors and enquiry-routing tools.
            </p>
            <p className="mt-4">Results are intended as initial guidance only. They do not constitute:</p>
            <ul className="list-disc pl-5 mt-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>Engineering advice</li>
              <li>Agricultural or agronomic advice</li>
              <li>Technical certification</li>
              <li>Financial advice</li>
              <li>Investment advice</li>
              <li>Guaranteed project recommendations</li>
              <li>Guaranteed performance</li>
              <li>A quotation or contractual offer</li>
            </ul>
            <p className="mt-4 font-medium text-white">
              Any project-specific recommendation must be appropriately assessed before implementation.
            </p>
          </Section>

          <Section title="4. GROWING AND AGRICULTURAL INFORMATION">
            <p>
              Information relating to crops, growing systems, greenhouses, hydroponics, aeroponics, aquaponics, microgreens or other growing methods is general and exploratory.
            </p>
            <p className="mt-4">Actual suitability and performance may depend on factors including:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4 leading-relaxed">
              CLIMATE • WATER QUALITY • CROP VARIETY • NUTRITION • GROWING METHOD • SYSTEM DESIGN • OPERATION • PESTS • DISEASE • MANAGEMENT
            </p>
            <p>
              No crop yield, production level, profitability or agricultural result is guaranteed merely because a crop, system or possibility appears on the website.
            </p>
          </Section>

          <Section title="5. WATER AND IRRIGATION INFORMATION">
            <p>
              Information concerning irrigation, monitoring, automation and water management is general until a project-specific assessment has been completed.
            </p>
            <p className="mt-4">
              Actual system requirements depend on site, water source, water quality, plants or crops, climate, infrastructure and other technical factors.
            </p>
          </Section>

          <Section title="6. LANDSCAPES, GREENING AND ENVIRONMENTAL PROJECTS">
            <p>
              Concepts relating to landscapes, urban forests, desert greening and environmental projects are intended to demonstrate potential directions.
            </p>
            <p className="mt-4">
              Plant selection, establishment, water requirements, environmental performance and long-term viability remain subject to site-specific conditions and appropriate assessment.
            </p>
          </Section>

          <Section title="7. VISUALS, RENDERS AND CONCEPT IMAGERY">
            <p>The NABTURA website may use:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4 leading-relaxed">
              PHOTOGRAPHY • RENDERS • ILLUSTRATIONS • DIAGRAMS • CONCEPT VISUALS • DIGITAL OR AI-ASSISTED IMAGERY
            </p>
            <p>Some imagery may be illustrative or conceptual.</p>
            <p className="mt-4 font-medium text-white">
              Unless expressly identified as a completed NABTURA project, imagery should not be interpreted as evidence of a completed project, an exact proposed design or a guaranteed outcome.
            </p>
            <p className="mt-4">Where appropriate, conceptual imagery may be identified as such.</p>
          </Section>

          <Section title="8. NABTURA POSSIBILITIES">
            <p>
              Concepts such as chef gardens, dining forests, productive rooftops, urban oases, edible landscapes and other NABTURA Possibilities are exploratory concepts rather than fixed packages.
            </p>
            <p className="mt-4 text-nabtura-green italic">The possibility follows the space, purpose and project.</p>
            <p className="mt-4">Availability, feasibility, scope and price require separate assessment.</p>
          </Section>

          <Section title="9. NURSERY SOLUTIONS">
            <p>
              Information concerning NABTURA Nursery Solutions may include plant sourcing, nursery coordination, preparation, supply and establishment support.
            </p>
            <p className="mt-4">
              Unless expressly stated for a particular project, website content does not represent that all plant material is grown, owned or directly produced by NABTURA.
            </p>
            <p className="mt-4">
              Plant availability, quantity, specification and suitability are subject to project requirements and sourcing conditions.
            </p>
          </Section>

          <Section title="10. SMARTCARE">
            <p>
              NABTURA SmartCare represents ongoing support capabilities that may include monitoring, care, management and optimization.
            </p>
            <p className="mt-4">
              The exact scope, frequency, response arrangements, service levels and responsibilities will depend on the applicable SmartCare agreement or project arrangement.
            </p>
            <p className="mt-4">Website descriptions do not create a service-level commitment.</p>
          </Section>

          <Section title="11. INVESTMENT AND PARTNERSHIP INFORMATION">
            <p>NABTURA may invite discussions involving:</p>
            <p className="font-bold text-white tracking-widest text-xs uppercase my-4 leading-relaxed">
              CAPITAL • LAND • TECHNOLOGY • CAPABILITY • PRODUCTS • MARKET ACCESS • PROJECT OPPORTUNITIES • STRATEGIC PARTNERSHIPS
            </p>
            <p>Website content relating to such opportunities is exploratory.</p>
            <p className="mt-4">Nothing on the website constitutes:</p>
            <ul className="list-disc pl-5 mt-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>An offer of securities</li>
              <li>A solicitation to invest</li>
              <li>Financial advice</li>
              <li>Investment advice</li>
              <li>A guaranteed return</li>
              <li>A guaranteed yield</li>
              <li>A guaranteed payback period</li>
              <li>A binding joint-venture proposal</li>
            </ul>
            <p className="mt-4 font-medium text-white">
              Any investment or partnership arrangement will be subject to separate assessment, due diligence, negotiation and formal documentation.
            </p>
          </Section>

          <Section title="12. ENQUIRIES ARE NOT CONTRACTS">
            <p>
              Submitting an enquiry, completing an interactive tool, sending project information or communicating with NABTURA does not by itself create a contractual relationship.
            </p>
            <p className="mt-4">
              A project or commercial relationship arises only through appropriate agreement between the relevant parties.
            </p>
          </Section>

          <Section title="13. USER-SUBMITTED MATERIALS">
            <p>You may submit photographs, plans, drawings, briefs and other materials.</p>
            <p className="mt-4">
              By doing so, you confirm that you are authorized to provide them and that their submission does not unlawfully violate another person's rights. You retain ownership of your materials.
            </p>
            <p className="mt-4">
              You grant INFORGRID FZC permission to review, internally reproduce and share those materials with relevant personnel, advisers, suppliers, consultants or potential project partners to the extent reasonably necessary to evaluate or respond to your enquiry.
            </p>
            <p className="mt-4">This permission does not transfer ownership of your materials to INFORGRID FZC.</p>
          </Section>

          <Section title="14. ACCEPTABLE USE">
            <p>You must not use the website to:</p>
            <ul className="list-disc pl-5 mt-4 space-y-1.5 text-gray-400 marker:text-nabtura-green">
              <li>Violate applicable law</li>
              <li>Submit fraudulent information</li>
              <li>Infringe intellectual-property or privacy rights</li>
              <li>Upload malicious software or code</li>
              <li>Attempt unauthorized access</li>
              <li>Disrupt website functionality</li>
              <li>Circumvent website security</li>
              <li>Misuse forms or interactive tools</li>
              <li>Scrape or systematically extract website content in an unauthorized manner</li>
            </ul>
          </Section>

          <Section title="15. INTELLECTUAL PROPERTY">
            <p>
              Unless otherwise indicated, the NABTURA website and its original content, branding, graphics, layouts, copy, solution presentation and other proprietary materials are owned by or licensed to INFORGRID FZC.
            </p>
            <p className="mt-4">
              They may not be commercially reproduced, modified, distributed or exploited without authorization except as permitted by applicable law.
            </p>
            <p className="mt-4">Third-party trademarks and materials remain the property of their respective owners.</p>
          </Section>

          <Section title="16. THIRD-PARTY SERVICES AND LINKS">
            <p>
              The website may contain links to or integrations with third-party platforms. NABTURA does not control those third-party services.
            </p>
            <p className="mt-4">Your use of them may be governed by separate terms and privacy policies.</p>
          </Section>

          <Section title="17. WEBSITE AVAILABILITY AND ACCURACY">
            <p>We aim to maintain useful and accurate website information.</p>
            <p className="mt-4">However, information, features, availability and website content may change. We do not guarantee that the website will always be uninterrupted, error-free or completely current.</p>
            <p className="mt-4 font-medium text-white">
              Material project decisions should not be based solely on general website content.
            </p>
          </Section>

          <Section title="18. LIMITATION OF LIABILITY">
            <p>
              To the maximum extent permitted by applicable law, INFORGRID FZC shall not be responsible for indirect, incidental, special or consequential loss arising solely from reliance on general website information or inability to access the website.
            </p>
            <p className="mt-4">
              Nothing in these Terms excludes or restricts any liability that cannot lawfully be excluded or restricted.
            </p>
          </Section>

          <Section title="19. PRIVACY AND COOKIES">
            <p>Personal-data handling is described in our <Link href="/legal/privacy-policy" className="text-nabtura-green hover:underline">Privacy Policy</Link>.</p>
            <p className="mt-2">Use of cookies and similar technologies is described in our <Link href="/legal/cookie-policy" className="text-nabtura-green hover:underline">Cookie Policy</Link>.</p>
          </Section>

          <Section title="20. CHANGES TO THESE TERMS">
            <p>We may update these Terms from time to time.</p>
            <p className="mt-4">The latest version will be published on this page together with the applicable update date.</p>
            <p className="mt-4">
              Continued use of the website following publication of revised Terms is subject to the revised Terms, to the extent permitted by applicable law.
            </p>
          </Section>

          <Section title="21. GOVERNING LAW AND JURISDICTION">
            <p>
              These Terms and use of the NABTURA website are governed by the applicable laws of the United Arab Emirates and, where applicable, the laws and regulations applicable in the Emirate of Sharjah.
            </p>
            <p className="mt-4">
              Any dispute shall be subject to the jurisdiction of the competent courts, subject to mandatory provisions of applicable law.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-nabtura-green/10 border border-nabtura-green/20 text-xs text-nabtura-light-green italic">
              Note: SPC Free Zone's own published website terms similarly identify UAE law as governing its site and refer disputes to a competent UAE court. This particular clause should receive final UAE legal review before publication.
            </div>
          </Section>

          <Section title="22. CONTACT">
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

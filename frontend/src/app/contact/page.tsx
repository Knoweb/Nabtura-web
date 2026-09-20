"use client";

import { useState, useEffect } from "react";
import SolutionHero from "@/components/solutions/SolutionHero";
import { ArrowRight, ChevronLeft, Upload, Check } from "lucide-react";
import Link from "next/link";
import { submitEnquiry } from "@/lib/api";
import { useEnquiry, EnquiryType } from "@/context/EnquiryContext";

const ENQUIRY_OPTIONS = [
  { id: "grow_food", title: "I WANT TO GROW FOOD", subtitle: "Smart Greenhouses • Smart Microgreens" },
  { id: "grow_food_home", title: "I WANT TO GROW FOOD AT HOME", subtitle: "Smart Home Greenhouse • Hydroponics • Edible Growing" },
  { id: "water", title: "I WANT TO MANAGE WATER", subtitle: "Smart Irrigation • Water Management • Monitoring" },
  { id: "green_space", title: "I WANT TO CREATE A GREEN SPACE", subtitle: "Landscapes • Urban Forests • Green Experiences" },
  { id: "green_land", title: "I WANT TO GREEN LAND", subtitle: "Desert Greening • Land Transformation" },
  { id: "challenge", title: "I HAVE AN ENVIRONMENTAL CHALLENGE", subtitle: "Custom • Integrated • Project-Specific Solutions" },
  { id: "plants", title: "I NEED PLANTS FOR A PROJECT", subtitle: "Nursery Solutions • Plant Sourcing • Project Supply" },
  { id: "smartcare", title: "I NEED ONGOING SUPPORT", subtitle: "NABTURA SmartCare" },
  { id: "investment", title: "I WANT TO INVEST OR PARTNER", subtitle: "Investment • Land • Technology • Capability • Partnership" },
  { id: "general", title: "I'M NOT SURE", subtitle: "Help me find the right solution" },
];

export default function ContactPage() {
  const { enquiryState, setEnquiryState: setContextState, resetEnquiry } = useEnquiry();

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  
  // State for selections and form data (Initialize from Context)
  const [enquiryType, setEnquiryType] = useState<EnquiryType | null>(enquiryState.type);
  const [adaptiveAnswer, setAdaptiveAnswer] = useState<Record<string, string>>(enquiryState.adaptiveAnswer || {});
  const [projectInfo, setProjectInfo] = useState({ location: "", stage: "", description: enquiryState.projectDescription });
  const [attachment, setAttachment] = useState<File | null>(null);
  const [contactDetails, setContactDetails] = useState({ name: "", email: "", phone: "", company: "", preferredContact: "Email" });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  // Jump to appropriate step if context is pre-filled
  useEffect(() => {
    if (enquiryState.projectDescription) {
      setStep(4); // Everything up to description is filled, go to contact details
    } else if (Object.keys(enquiryState.adaptiveAnswer || {}).length > 0) {
      setStep(3); // Answer filled, go to project info
    } else if (enquiryState.type) {
      // Need to check if this type has an adaptive question
      const qs = getAdaptiveQuestionsForType(enquiryState.type);
      if (qs && qs.length > 0) setStep(2);
      else setStep(3);
    }
  }, []); // Run only on mount

  // Sync state changes with Context
  useEffect(() => {
    setContextState({ type: enquiryType, adaptiveAnswer, projectDescription: projectInfo.description });
  }, [enquiryType, adaptiveAnswer, projectInfo.description, setContextState]);

  // Step 2 Logic
  const getAdaptiveQuestionsForType = (type: EnquiryType | null) => {
    switch (type) {
      case "grow_food":
      case "grow_food_home":
        return [
          { key: "q1", label: "What would you like to grow?", options: ["Leafy Greens", "Herbs", "Tomatoes", "Microgreens", "Other"] },
          { key: "q2", label: "Commercial or personal?", options: ["Commercial", "Personal", "Not Sure"] },
          { key: "q3", label: "Do you have a location?", options: ["Yes, I have a site", "No, exploring", "Not Sure"] }
        ];
      case "water":
        return [
          { key: "q1", label: "What needs to be irrigated?", options: ["Landscape", "Farm/Greenhouse", "Commercial Property", "Other"] },
          { key: "q2", label: "New or existing system?", options: ["New System", "Existing System", "Not Sure"] },
          { key: "q3", label: "Approximate site size?", options: ["Small", "Medium", "Large", "Not Sure"] }
        ];
      case "green_space":
      case "green_land":
        return [
          { key: "q1", label: "What type of space or land?", options: ["Resort/Hotel", "Residential", "Commercial", "Bare Land", "Other"] },
          { key: "q2", label: "Approximate area?", options: ["Small", "Medium", "Large", "Not Sure"] },
          { key: "q3", label: "What would you like it to become?", options: ["Productive Green", "Aesthetic Landscape", "Urban Forest", "Other"] }
        ];
      case "plants":
        return [
          { key: "q1", label: "Project type?", options: ["Residential", "Commercial", "Farm", "Other"] },
          { key: "q2", label: "Plant requirements known?", options: ["Yes", "No", "Partially"] },
          { key: "q3", label: "Approximate quantities?", options: ["Small", "Medium", "Large", "Not Sure"] },
          { key: "q4", label: "Required location/timeline?", options: ["ASAP", "Within 3 Months", "Planning Stage"] }
        ];
      case "smartcare":
        return [
          { key: "q1", label: "What needs support?", options: ["Growing System", "Irrigation", "Landscape", "Technology"] },
          { key: "q2", label: "Existing NABTURA project/system?", options: ["Yes", "No", "Not Sure"] },
          { key: "q3", label: "Type of care required?", options: ["Monitoring", "Maintenance", "Optimization", "Not Sure"] }
        ];
      case "investment":
        return [
          { key: "q1", label: "What do you bring?", options: ["Capital", "Land", "Technology", "Capability", "Product/Solution", "Market Access", "Project Opportunity"] },
          { key: "q2", label: "What are you looking to achieve?", options: ["Investment Return", "Strategic Partnership", "Joint Venture", "Other"] }
        ];
      default:
        return null; // For "challenge" and "general" we can skip to step 3
    }
  };

  const adaptiveQuestions = getAdaptiveQuestionsForType(enquiryType);

  const isStep2Valid = () => {
    if (!adaptiveQuestions) return true;
    return adaptiveQuestions.every(q => adaptiveAnswer[q.key]);
  };

  const handleNextStep = () => {
    if (step === 1 && enquiryType) {
      if (adaptiveQuestions && adaptiveQuestions.length > 0) setStep(2);
      else setStep(3);
    } else if (step === 2 && isStep2Valid()) {
      setStep(3);
    } else if (step === 3 && projectInfo.description) {
      setStep(4);
    }
  };

  const handlePrevStep = () => {
    if (step === 4) setStep(3);
    else if (step === 3) {
      if (adaptiveQuestions && adaptiveQuestions.length > 0) setStep(2);
      else setStep(1);
    }
    else if (step === 2) setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) return;
    
    setStatus("loading");
    try {
      await submitEnquiry({
        enquiryType: enquiryType as string,
        adaptiveAnswer: JSON.stringify(adaptiveAnswer),
        ...projectInfo,
        ...contactDetails,
        marketingConsent
      }, attachment || undefined);
      setStatus("success");
      resetEnquiry(); // Clear context on success
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-transparent pt-20 pb-32">
      <SolutionHero
        eyebrow="CONTACT NABTURA"
        headline={<>LET'S START<br/>A CONVERSATION.</>}
        tagline="Have a project, space, land, idea or opportunity? Tell us what you're looking to achieve and we'll help identify the right NABTURA path."
        bgImageUrl="/possibility_smart_greenhouse_1788160454551.jpg"
        accentColor="text-white"
      />

      <section id="router" className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {status === "success" ? (
          <div className="bg-nabtura-slate p-12 rounded-[2rem] border border-divider text-center shadow-2xl">
            <div className="w-20 h-20 bg-nabtura-green rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(46,204,113,0.3)]">
              <Check className="text-black w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-4">ENQUIRY RECEIVED</h2>
            <p className="text-lg text-gray-300 font-light max-w-xl mx-auto">
              Thank you for starting a conversation with NABTURA. We have received your details and our team will be in touch with you shortly.
            </p>
          </div>
        ) : (
          <div className="bg-nabtura-slate p-8 md:p-12 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-nabtura-green/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Progress Header */}
            <div className="flex items-center justify-between mb-12 relative z-10 border-b border-white/10 pb-6">
              {step > 1 && (
                <button onClick={handlePrevStep} className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-400 hover:text-white transition-colors">
                  <ChevronLeft className="w-4 h-4" /> BACK
                </button>
              )}
              <div className="flex gap-2 ml-auto">
                {[1, 2, 3, 4].map(s => (
                  <div key={s} className={`w-12 h-1 rounded-full transition-colors ${s <= step ? 'bg-nabtura-green' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="relative z-10">
              
              {/* STEP 1: ENQUIRY TYPE */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8">WHAT WOULD YOU<br/>LIKE TO DO?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ENQUIRY_OPTIONS.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setEnquiryType(option.id as EnquiryType);
                          setAdaptiveAnswer({}); // reset answer when changing type
                        }}
                        className={`text-left p-6 rounded-2xl border transition-all ${enquiryType === option.id ? 'border-nabtura-green bg-nabtura-green/10 shadow-[0_0_20px_rgba(46,204,113,0.1)]' : 'border-white/10 bg-white/5 hover:border-white/30 hover:bg-white/10'}`}
                      >
                        <h3 className={`text-sm font-bold tracking-widest uppercase mb-2 ${enquiryType === option.id ? 'text-nabtura-green' : 'text-white'}`}>
                          {option.title}
                        </h3>
                        <p className="text-xs text-gray-400 font-light leading-relaxed">
                          {option.subtitle}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div className="mt-12 flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!enquiryType}
                      className="bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      CONTINUE <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: ADAPTIVE QUESTIONS */}
              {step === 2 && adaptiveQuestions && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8">TELL US<br/>A LITTLE MORE.</h2>
                  
                  <div className="space-y-8">
                    {adaptiveQuestions.map((q) => (
                      <div key={q.key}>
                        <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-4">{q.label}</label>
                        <div className="flex flex-wrap gap-3">
                          {q.options.map(opt => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setAdaptiveAnswer({ ...adaptiveAnswer, [q.key]: opt })}
                              className={`px-5 py-3 rounded-xl border text-xs font-bold tracking-widest uppercase transition-all ${adaptiveAnswer[q.key] === opt ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green' : 'border-white/10 bg-white/5 text-white hover:border-white/30 hover:bg-white/10'}`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12 flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!isStep2Valid()}
                      className="bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      CONTINUE <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PROJECT INFORMATION */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">SHOW US<br/>WHAT YOU HAVE.</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Project Location</label>
                      <input 
                        type="text" 
                        value={projectInfo.location} 
                        onChange={e => setProjectInfo({ ...projectInfo, location: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors" 
                        placeholder="Country / City"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Project Stage</label>
                      <select
                        value={projectInfo.stage}
                        onChange={e => setProjectInfo({ ...projectInfo, stage: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors appearance-none"
                      >
                        <option value="" disabled>Select Stage</option>
                        <option value="Exploring an Idea">Exploring an Idea</option>
                        <option value="Planning">Planning</option>
                        <option value="Ready to Develop">Ready to Develop</option>
                        <option value="Existing Project / System">Existing Project / System</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">WHAT ARE YOU LOOKING TO ACHIEVE? *</label>
                    <textarea 
                      required 
                      rows={4} 
                      value={projectInfo.description} 
                      onChange={e => setProjectInfo({ ...projectInfo, description: e.target.value })} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-600 focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors"
                      placeholder="Short description..."
                    ></textarea>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">SOMETIMES A PHOTO SAYS MORE.</h3>
                    <p className="text-sm font-light text-gray-400 mb-6">Have a site, rooftop, garden, land parcel, existing system or space you want to transform? Send us a photo, drawing, plan or project brief with your enquiry.</p>
                    <label className="block border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-nabtura-green/50 hover:bg-nabtura-green/5 transition-colors group cursor-pointer">
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={(e) => setAttachment(e.target.files?.[0] || null)}
                      />
                      <Upload className="w-8 h-8 text-gray-500 mx-auto mb-4 group-hover:text-nabtura-green transition-colors" />
                      {attachment ? (
                        <p className="text-sm font-bold text-nabtura-green">{attachment.name}</p>
                      ) : (
                        <p className="text-sm font-light text-gray-400">UPLOAD & START A CONVERSATION &rarr;</p>
                      )}
                    </label>
                    <p className="mt-3 text-xs font-light text-gray-500 leading-relaxed text-center">
                      Please only upload materials you are authorized to share. Avoid including unnecessary personal or sensitive information.
                    </p>
                  </div>

                  <div className="mt-12 flex justify-end">
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      disabled={!projectInfo.description}
                      className="bg-nabtura-green text-black px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      CONTINUE <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT DETAILS */}
              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
                  <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-8">HOW SHOULD<br/>WE REACH YOU?</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Name *</label>
                      <input 
                        required 
                        type="text" 
                        value={contactDetails.name} 
                        onChange={e => setContactDetails({ ...contactDetails, name: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Company / Organization (Optional)</label>
                      <input 
                        type="text" 
                        value={contactDetails.company} 
                        onChange={e => setContactDetails({ ...contactDetails, company: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Email *</label>
                      <input 
                        required 
                        type="email" 
                        value={contactDetails.email} 
                        onChange={e => setContactDetails({ ...contactDetails, email: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Phone / WhatsApp *</label>
                      <input 
                        required 
                        type="tel" 
                        value={contactDetails.phone} 
                        onChange={e => setContactDetails({ ...contactDetails, phone: e.target.value })} 
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-nabtura-green focus:bg-white/10 transition-colors" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">Preferred Contact Method</label>
                    <div className="grid grid-cols-3 gap-4">
                      {["Email", "Phone", "WhatsApp"].map(method => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setContactDetails({ ...contactDetails, preferredContact: method })}
                          className={`p-4 rounded-xl border text-xs font-bold tracking-widest uppercase transition-colors ${contactDetails.preferredContact === method ? 'border-nabtura-green bg-nabtura-green/10 text-nabtura-green' : 'border-white/10 bg-white/5 hover:bg-white/10 text-white'}`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                    {contactDetails.preferredContact === "WhatsApp" && (
                      <p className="mt-3 text-xs font-light text-gray-500 leading-relaxed">
                        Prefer WhatsApp? By choosing WhatsApp, you will continue through a third-party communication service subject to its own terms and privacy practices.
                      </p>
                    )}
                  </div>

                  <div className="pt-6 border-t border-white/10 space-y-4">
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input 
                          type="checkbox" 
                          required
                          checked={privacyConsent}
                          onChange={e => setPrivacyConsent(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded border transition-colors flex items-center justify-center ${privacyConsent ? 'bg-nabtura-green border-nabtura-green' : 'border-gray-500 group-hover:border-nabtura-green bg-white/5'}`}>
                          {privacyConsent && <Check className="w-4 h-4 text-black" />}
                        </div>
                      </div>
                      <p className="text-xs font-light text-gray-400 leading-relaxed">
                        By submitting this form, you agree that NABTURA / INFORGRID FZC may use the information you provide to respond to your enquiry and manage related communications in accordance with our <Link href="/legal/privacy-policy" className="text-nabtura-green hover:underline">Privacy Policy</Link>.
                      </p>
                    </label>
                    
                    <label className="flex items-start gap-4 cursor-pointer group">
                      <div className="relative flex items-center justify-center mt-1">
                        <input 
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={e => setMarketingConsent(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-6 h-6 rounded border transition-colors flex items-center justify-center ${marketingConsent ? 'bg-nabtura-green border-nabtura-green' : 'border-gray-500 group-hover:border-nabtura-green bg-white/5'}`}>
                          {marketingConsent && <Check className="w-4 h-4 text-black" />}
                        </div>
                      </div>
                      <p className="text-xs font-light text-gray-400 leading-relaxed">
                        I would also like to receive occasional NABTURA news, insights and opportunities.
                      </p>
                    </label>
                  </div>

                  {status === "error" && (
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-sm font-bold text-center">
                      Failed to submit enquiry. Please try again or contact us directly.
                    </div>
                  )}

                  <div className="mt-12 flex justify-end">
                    <button 
                      type="submit" 
                      disabled={!contactDetails.name || !contactDetails.email || !contactDetails.phone || !privacyConsent || status === "loading"}
                      className="w-full md:w-auto bg-nabtura-green text-black px-12 py-4 rounded-full text-sm font-bold tracking-widest uppercase hover:bg-nabtura-light-green transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(46,204,113,0.2)] hover:shadow-[0_0_30px_rgba(46,204,113,0.4)]"
                    >
                      {status === "loading" ? "SUBMITTING..." : "SUBMIT MY ENQUIRY"}
                    </button>
                  </div>
                </div>
              )}

            </form>
          </div>
        )}
      </section>

    </main>
  );
}

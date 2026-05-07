import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';

export default function Contact() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="Reserve Your Spot" />
        <SectionHeading>Begin Your Journey</SectionHeading>
        <p className="font-body text-base md:text-lg text-foreground/50 text-center max-w-2xl mx-auto mt-5 leading-relaxed">
          Cohorts are limited to 12 students per session. Secure your place below and our team will contact you within 24 hours.
        </p>

        {submitted ? (
          <div className="mt-16 text-center border border-primary/30 bg-card p-10 clip-corner">
            <p className="font-heading text-2xl font-bold text-primary mb-3">Enquiry Received</p>
            <p className="font-body text-foreground/60">Thank you. Our team will reach out within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-16 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">First Name *</label>
                <Input required className="bg-card border-primary/15 h-12 font-body text-foreground focus:border-primary" />
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Last Name *</label>
                <Input required className="bg-card border-primary/15 h-12 font-body text-foreground focus:border-primary" />
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Email Address *</label>
                <Input required type="email" className="bg-card border-primary/15 h-12 font-body text-foreground focus:border-primary" />
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Phone With Country Code</label>
                <Input type="tel" className="bg-card border-primary/15 h-12 font-body text-foreground focus:border-primary" />
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Country of Origin *</label>
                <Input required className="bg-card border-primary/15 h-12 font-body text-foreground focus:border-primary" />
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Experience Level</label>
                <Select>
                  <SelectTrigger className="bg-card border-primary/15 h-12 font-body text-foreground">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-primary/20">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="fighter">Fighter / Competition Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Select Package</label>
                <Select>
                  <SelectTrigger className="bg-card border-primary/15 h-12 font-body text-foreground">
                    <SelectValue placeholder="Choose package" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-primary/20">
                    <SelectItem value="warrior">Warrior Path</SelectItem>
                    <SelectItem value="champion">Champion's Camp</SelectItem>
                    <SelectItem value="grand">Grand Master Programme</SelectItem>
                    <SelectItem value="custom">Custom Immersion</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Preferred Start Date</label>
                <Input type="date" className="bg-card border-primary/15 h-12 font-body text-foreground focus:border-primary" />
              </div>
            </div>

            <div>
              <label className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mb-2 block">Tell us about your goals & any dietary / medical notes</label>
              <Textarea className="bg-card border-primary/15 min-h-[120px] font-body text-foreground focus:border-primary" />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                checked={agreed}
                onCheckedChange={setAgreed}
                className="mt-0.5 border-primary/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label className="font-body text-sm text-foreground/50 cursor-pointer" onClick={() => setAgreed(!agreed)}>
                I agree to be contacted about my YuNiThai enquiry.
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreed}
              className="w-full font-ui text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground py-4 hover:bg-primary/90 transition-all duration-300 clip-corner-sm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit Enquiry — Begin Your Journey
            </button>

            <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/30 text-center">
              We reply within 24 hours · No payment required at this stage
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
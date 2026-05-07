import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Star } from 'lucide-react';

export default function MasterModal({ master, open, onClose }) {
  if (!master) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-primary/20 max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Close */}
          <button
            onClick={() => onClose(false)}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-background/80 backdrop-blur-sm border border-primary/30 text-foreground hover:text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid md:grid-cols-5 gap-0">
            {/* Image */}
            <div className="md:col-span-2">
              <img
                src={master.image}
                alt={master.name}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:col-span-3 p-6 md:p-8 space-y-5">
              <div>
                <div className="inline-block bg-primary/10 border border-primary/30 px-3 py-1 mb-3">
                  <span className="font-ui text-[10px] tracking-[0.2em] uppercase text-primary">{master.accreditation}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold">{master.name}</h3>
                <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mt-1">{master.role}</p>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <div className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-3">
                  <div className="border-t border-primary/20 pt-2">
                    <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40">Experience</p>
                    <p className="font-body text-foreground/80 mt-0.5">{master.years} years</p>
                  </div>
                  <div className="border-t border-primary/20 pt-2">
                    <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40">Accreditation</p>
                    <p className="font-body text-foreground/80 mt-0.5">{master.accreditation}</p>
                  </div>
                </div>

                <div className="border-t border-primary/20 pt-3">
                  <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40 mb-1">Specialties</p>
                  <p className="font-body text-foreground/70 leading-relaxed">{master.specialties}</p>
                </div>

                <div className="border-t border-primary/20 pt-3">
                  <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40 mb-1">Background</p>
                  <p className="font-body text-foreground/70 leading-relaxed">{master.background}</p>
                </div>

                <div className="border-t border-primary/20 pt-3">
                  <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40 mb-1">Training Style</p>
                  <p className="font-body text-foreground/70 leading-relaxed">{master.trainingStyle}</p>
                </div>

                <div className="border-t border-primary/20 pt-3">
                  <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40 mb-1">Best For</p>
                  <p className="font-body text-foreground/70 leading-relaxed">{master.bestFor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
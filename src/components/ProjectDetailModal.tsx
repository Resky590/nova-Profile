import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { playTactileClick } from '../utils/sound';
import { Project } from './SelectedProjects';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 sm:p-6"
    >
      <div className="w-full max-w-4xl bg-[#161719] text-white border border-white/20 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10">
          <div className="flex items-center gap-3 text-xs font-mono-num text-white/50 uppercase tracking-wider">
            <span>№ {project.id}</span>
            <span>·</span>
            <span>{project.client}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={() => {
              playTactileClick();
              onClose();
            }}
            aria-label="Close dialog"
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer rounded-full"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 max-h-[80vh] overflow-y-auto space-y-8">
          <div className="aspect-[16/9] w-full bg-black overflow-hidden border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-8 space-y-4">
              <h2 id="project-modal-title" className="font-grotesk font-extrabold text-3xl sm:text-4xl text-white">
                {project.title}
              </h2>
              <p className="text-sm text-white/75 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 p-5 bg-white/5 border border-white/10 space-y-4">
              <div>
                <span className="font-mono-num text-[11px] text-white/40 uppercase block mb-1">BIDANG</span>
                <span className="font-medium text-xs text-white">{project.category}</span>
              </div>
              <div>
                <span className="font-mono-num text-[11px] text-white/40 uppercase block mb-1">DAMPAK / PENCAPAIAN</span>
                <span className="font-bold text-sm text-white font-mono-num">{project.impact}</span>
              </div>
              <button
                onClick={() => {
                  playTactileClick();
                  onClose();
                  onStartProject();
                }}
                className="w-full py-3 bg-white text-black font-semibold text-xs uppercase tracking-wider hover:bg-white/90 transition-colors flex items-center justify-center gap-1.5 cursor-pointer mt-4"
              >
                <span>Diskusikan Proyek</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

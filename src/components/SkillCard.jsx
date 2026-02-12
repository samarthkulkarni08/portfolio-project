import React from 'react';
import {
  Layout,
  Box,
  GitBranch,
  Lightbulb,
  Sparkles,
  Palette,
  Search,
  Play,
  Globe,
  PenTool,
  Image,
  MessageCircle,
  Layers,
} from 'lucide-react';

const LUCIDE_ICONS = {
  Layout,
  Box,
  GitBranch,
  Lightbulb,
  Sparkles,
  Palette,
  Search,
  Play,
  Globe,
  PenTool,
  Image,
  MessageCircle,
  Layers,
};

export default function SkillCard({ skill, compact = false }) {
  const IconComponent = skill.lucideIcon ? LUCIDE_ICONS[skill.lucideIcon] : null;
  const sizeClass = compact ? 'w-5 h-5' : 'w-8 h-8';
  const containerClass = compact ? 'w-6 h-6' : 'w-8 h-8';
  const sizePx = compact ? 20 : 32;

  const iconUrl = skill.iconSlug
    ? `https://cdn.simpleicons.org/${skill.iconSlug}${skill.iconColor ? `/${skill.iconColor}` : ''}`
    : null;

  const [imgError, setImgError] = React.useState(false);
  const useImg = iconUrl && !imgError;

  if (compact) {
    return (
      <div className="group flex items-center gap-2 py-1.5 px-2 rounded-lg hover:bg-slate-100 dark:hover:bg-stone-800 transition-colors cursor-default">
        <div className={`flex items-center justify-center flex-shrink-0 ${containerClass} ${skill.color}`}>
          {useImg ? (
            <img
              src={iconUrl}
              alt=""
              width={sizePx}
              height={sizePx}
              className={`${sizeClass} object-contain`}
              onError={() => setImgError(true)}
            />
          ) : IconComponent ? (
            <IconComponent className={sizeClass} strokeWidth={2} />
          ) : null}
        </div>
        <span className="text-sm font-medium text-slate-700 dark:text-stone-300 truncate">{skill.name}</span>
      </div>
    );
  }

  return (
    <div className="group flex flex-col items-center justify-center p-3 bg-white dark:bg-stone-800 border border-slate-200 dark:border-stone-700 rounded-xl hover:border-slate-400 dark:hover:border-stone-500 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className={`mb-2 flex items-center justify-center ${containerClass} group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
        {useImg ? (
          <img
            src={iconUrl}
            alt={skill.name}
            width={sizePx}
            height={sizePx}
            className={`${sizeClass} object-contain`}
            onError={() => setImgError(true)}
          />
        ) : IconComponent ? (
          <IconComponent className={sizeClass} strokeWidth={2} />
        ) : null}
      </div>
      <span className="text-xs font-semibold text-slate-700 dark:text-stone-300 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  );
}

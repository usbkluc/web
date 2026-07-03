import { motion } from 'motion/react';
import { Star, HardDrive, Download, Calendar, Sword, Compass, Flame, Layers, Wrench, Ghost, Trophy, Gamepad2 } from 'lucide-react';
import { Game } from '../types';
import { CATEGORIES } from '../data';

interface GameCardProps {
  key?: string;
  game: Game;
  onSelect: (game: Game) => void;
}

function getCardCategoryIcon(catId?: string) {
  switch (catId) {
    case 'akcne': return <Flame className="h-5 w-5 text-red-400" />;
    case 'sportove': return <Trophy className="h-5 w-5 text-amber-400" />;
    case 'rpg': return <Sword className="h-5 w-5 text-violet-400" />;
    case 'prezitie': return <Compass className="h-5 w-5 text-emerald-400" />;
    case 'simulatory': return <Wrench className="h-5 w-5 text-blue-400" />;
    case 'horory': return <Ghost className="h-5 w-5 text-purple-400" />;
    case 'strategie': return <Layers className="h-5 w-5 text-cyan-400" />;
    case 'indie': return <Gamepad2 className="h-5 w-5 text-teal-400" />;
    default: return <Gamepad2 className="h-5 w-5 text-slate-400" />;
  }
}

export function GameCard({ game, onSelect }: GameCardProps) {
  const isGenerated = game.id.startsWith('gen-');

  // Find category labels
  const gameCategories = game.categories.map(catId => {
    return CATEGORIES.find(c => c.id === catId);
  }).filter(Boolean);

  // Generate a deterministic gradient for the game's logo cover backdrop to look unique
  const getDeterministicGradient = (title: string) => {
    const sum = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const index = sum % 5;
    const gradients = [
      'from-cyan-950/80 via-slate-950/70 to-slate-950/90',
      'from-blue-950/80 via-slate-950/70 to-slate-950/90',
      'from-purple-950/80 via-slate-950/70 to-slate-950/90',
      'from-emerald-950/80 via-slate-950/70 to-slate-950/90',
      'from-red-950/80 via-slate-950/70 to-slate-950/90'
    ];
    return gradients[index];
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-cyan-500/10"
      id={`game-card-${game.id}`}
    >
      {/* Game Image Header with styled center logo */}
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Background Image */}
        <img
          src={game.imageUrl}
          alt={game.title}
          referrerPolicy="no-referrer"
          className={`h-full w-full object-cover transition-all duration-500 group-hover:scale-105 ${
            isGenerated ? 'opacity-40 group-hover:opacity-50' : 'opacity-100 group-hover:opacity-90'
          }`}
        />

        {/* Dynamic Stylized Logo & Backdrop Cover Overlay (Only for generated games without official cover art) */}
        {isGenerated ? (
          <div className={`absolute inset-0 bg-gradient-to-t ${getDeterministicGradient(game.title)} flex flex-col items-center justify-center p-4 transition-all duration-500`}>
            {/* Subtle digital grid pattern for tech-theme */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none opacity-75" />
            
            <div className="flex flex-col items-center text-center gap-2 max-w-[90%] transform group-hover:scale-105 transition-transform duration-300 relative z-20">
              {/* Category Icon Emblem badge */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/90 border border-slate-800 shadow-xl group-hover:border-cyan-500/40 group-hover:shadow-cyan-500/10 transition-all duration-300">
                {getCardCategoryIcon(game.categories[0])}
              </div>
              
              {/* Game Title Styled as a Logo */}
              <span className="font-sans font-extrabold text-sm sm:text-base text-white tracking-wide uppercase select-none text-center leading-tight line-clamp-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
                {game.title}
              </span>
            </div>
          </div>
        ) : (
          /* Subtle vignette/shadow overlay for real covers to make floating badges readable */
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 z-10 pointer-events-none" />
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-1 rounded-full bg-slate-950/80 px-2.5 py-1 text-xs font-semibold text-amber-400 backdrop-blur-md border border-amber-500/20 shadow-md">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>{game.rating.toFixed(1)}</span>
        </div>

        {/* Categories over image bottom */}
        <div className="absolute bottom-3 left-3 z-30 flex flex-wrap gap-1.5">
          {gameCategories.map(cat => cat && (
            <span
              key={cat.id}
              className={`rounded-md px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${cat.bgColor} ${cat.color} border ${cat.borderColor} shadow-sm`}
            >
              {cat.label}
            </span>
          ))}
        </div>
      </div>

      {/* Game Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-sans text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-200">
            {game.title}
          </h3>
          <span className="flex items-center gap-1 text-xs text-slate-400 font-medium shrink-0">
            <Calendar className="h-3 w-3" />
            {game.releaseYear}
          </span>
        </div>

        <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {game.description}
        </p>

        {/* Footer info & Button */}
        <div className="mt-auto pt-4 border-t border-slate-800/60 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-slate-950/30 px-2 py-1 rounded-md border border-slate-800">
            <HardDrive className="h-3.5 w-3.5 text-cyan-400" />
            <span>{game.size}</span>
          </div>

          <button
            onClick={() => onSelect(game)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-2 text-xs font-semibold text-white transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 group-hover:translate-x-0.5 active:scale-95 cursor-pointer"
            id={`btn-view-${game.id}`}
          >
            <Download className="h-3.5 w-3.5" />
            <span>Stiahnuť Hru</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

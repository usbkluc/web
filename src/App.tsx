import { useState, useMemo, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, Sword, Compass, Flame, Layers, Wrench, Ghost, Trophy, Sparkles,
  Search, Database, BookOpen, ShieldCheck, Cpu, TrendingUp, X, ChevronDown, Download, AlertCircle, LayoutGrid, Loader2
} from 'lucide-react';

import { CATEGORIES, GAMES } from './data';
import { Game } from './types';
import { GameCard } from './components/GameCard';
import { GameDetailModal } from './components/GameDetailModal';

// Helper for category icons
function getCategoryIcon(iconName: string, className?: string) {
  switch (iconName) {
    case 'Gamepad2': return <Gamepad2 className={className} />;
    case 'Sword': return <Sword className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Cylinder': return <Layers className={className} />;
    case 'Wrench': return <Wrench className={className} />;
    case 'Ghost': return <Ghost className={className} />;
    case 'Trophy': return <Trophy className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    default: return <Gamepad2 className={className} />;
  }
}

// Common abbreviations / acronyms used by gamers (including Slovak colloquial names)
const GAME_ABBREVIATIONS: Record<string, string[]> = {
  'gta': ['grand theft auto', 'gta v', 'gta5', 'gta 5'],
  'gtav': ['grand theft auto', 'gta v', 'gta5', 'gta 5'],
  'gta5': ['grand theft auto', 'gta v', 'gta5', 'gta 5'],
  'cod': ['call of duty'],
  'nfs': ['need for speed'],
  'fifa': ['ea sports fc', 'fc 24', 'fc24', 'fifa'],
  'fc': ['ea sports fc', 'fc 24', 'fc24', 'fifa'],
  'mc': ['minecraft'],
  'cs': ['counter-strike', 'csgo', 'cs 2', 'cs2'],
  'csgo': ['counter-strike', 'csgo', 'cs 2', 'cs2'],
  'cs2': ['counter-strike', 'csgo', 'cs 2', 'cs2'],
  'rdr': ['red dead redemption'],
  'rdr2': ['red dead redemption 2'],
  'cp': ['cyberpunk'],
  'cp2077': ['cyberpunk 2077'],
  'bg': ["baldur's gate"],
  'bg3': ["baldur's gate 3"],
  'ac': ["assassin's creed"],
  'hl': ['half-life'],
  'hl2': ['half-life 2'],
  'witcher': ['the witcher', 'zaklinac'],
  'zaklinac': ['the witcher'],
  'pubg': ['playerunknown'],
  'sub': ['subnautica'],
  'sons': ['sons of the forest'],
  'forest': ['sons of the forest', 'the forest'],
  'phasmo': ['phasmophobia'],
  'cities': ['cities: skylines'],
  'skyline': ['cities: skylines'],
  'skylines': ['cities: skylines'],
  'alan': ['alan wake'],
  'hogwarts': ['hogwarts legacy'],
  'hp': ['hogwarts legacy', 'harry potter']
};

// Helper to remove Slovak and other accents/diacritics
const removeDiacritics = (str: string): string => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

// Helper for typo Levenshtein distance (optimized to use flat arrays, eliminating GC overhead and lag)
const getLevenshteinDistance = (a: string, b: string): number => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  let prev = new Int32Array(a.length + 1);
  let curr = new Int32Array(a.length + 1);

  for (let j = 0; j <= a.length; j++) {
    prev[j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    curr[0] = i;
    for (let j = 1; j <= a.length; j++) {
      curr[j] = b[i - 1] === a[j - 1]
        ? prev[j - 1]
        : Math.min(
            prev[j - 1] + 1, // substitution
            curr[j - 1] + 1, // insertion
            prev[j] + 1      // deletion
          );
    }
    const temp = prev;
    prev = curr;
    curr = temp;
  }
  return prev[a.length];
};

// Fuzzy matcher for game records
const gameMatchesQuery = (game: Game, rawQuery: string): boolean => {
  const q = removeDiacritics(rawQuery).trim().toLowerCase();
  if (!q) return true;

  const title = removeDiacritics(game.title);
  const desc = removeDiacritics(game.description || '');
  const dev = removeDiacritics(game.developer || '');
  const pub = removeDiacritics(game.publisher || '');

  // 1. Check if the query matches any category label of the game
  const matchingCategoryIds = CATEGORIES
    .filter(cat => removeDiacritics(cat.label).includes(q) || removeDiacritics(cat.id).includes(q))
    .map(cat => cat.id);
  const matchesCategory = game.categories.some(catId => matchingCategoryIds.includes(catId));
  if (matchesCategory) {
    return true;
  }

  // 2. Direct normalized substring match
  if (title.includes(q) || desc.includes(q) || dev.includes(q) || pub.includes(q)) {
    return true;
  }

  // 3. Acronym match (e.g., "gta" matching "Grand Theft Auto V" first letters G T A V)
  const titleWords = title.split(/[\s\-:_']+/).filter(Boolean);
  const acronym = titleWords.map(w => w[0]).join('');
  if (acronym.startsWith(q) || acronym === q) {
    return true;
  }

  // 4. Game abbreviations expansion dictionary
  for (const [abbr, expansions] of Object.entries(GAME_ABBREVIATIONS)) {
    if (q === abbr || abbr.startsWith(q)) {
      for (const exp of expansions) {
        if (title.includes(exp)) {
          return true;
        }
      }
    }
  }

  // 5. Slovak colloquial translations
  const slovakAliases: Record<string, string> = {
    'zaklinac': 'the witcher',
    'auta': 'grand theft auto',
    'strielacka': 'cyberpunk elden baldurs counter',
    'vojna': 'call of duty'
  };
  for (const [sk, en] of Object.entries(slovakAliases)) {
    if (q.includes(sk) && title.includes(en)) {
      return true;
    }
  }

  // 6. Word-by-word comparison for typos and partial words
  const queryWords = q.split(/[\s\-:_']+/).filter(Boolean);
  if (queryWords.length > 0) {
    const allQueryWordsMatch = queryWords.every(qw => {
      // Direct substring match in title/description
      if (title.includes(qw) || desc.includes(qw)) {
        return true;
      }
      // Check individual words
      return titleWords.some(tw => {
        if (tw.startsWith(qw) || tw.includes(qw) || qw.includes(tw)) {
          return true;
        }
        if (qw.length > 3) {
          const maxDistance = qw.length >= 6 ? 2 : 1;
          const dist = getLevenshteinDistance(qw, tw);
          if (dist <= maxDistance) {
            return true;
          }
        }
        return false;
      });
    });

    if (allQueryWordsMatch) {
      return true;
    }
  }

  return false;
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('vsetky');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [sortBy, setSortBy] = useState<'popularity' | 'title' | 'releaseYear'>('popularity');
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [searchGlobally, setSearchGlobally] = useState<boolean>(true);
  const [visibleLimit, setVisibleLimit] = useState<number>(30);

  // Debounce search query to completely eliminate keypress lag with 5000+ items
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 180); // 180ms is perfect: fast response, zero lag on rapid typing

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Reset visible limit when search or filters change to keep things incredibly fast
  useEffect(() => {
    setVisibleLimit(30);
  }, [selectedCategory, debouncedSearchQuery, sortBy, searchGlobally]);

  // AI-generated games stored locally (acts as our expanded custom game library)
  const [aiGames, setAiGames] = useState<Game[]>(() => {
    try {
      const saved = localStorage.getItem('tobipack_ai_games');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Combine static database with local custom-generated games
  const allGames = useMemo(() => {
    const combined = [...GAMES];
    const ids = new Set(combined.map(g => g.id));
    for (const g of aiGames) {
      if (!ids.has(g.id)) {
        combined.push(g);
      }
    }
    return combined;
  }, [aiGames]);

  // Handler to select a game and persist it to user's library if generated on-the-fly
  const handleSelectGame = useCallback((game: Game) => {
    const isPreloaded = GAMES.some(g => g.id === game.id);
    const isSaved = aiGames.some(g => g.id === game.id);
    if (!isPreloaded && !isSaved) {
      setAiGames(prev => {
        const updated = [game, ...prev];
        localStorage.setItem('tobipack_ai_games', JSON.stringify(updated));
        return updated;
      });
    }
    setSelectedGame(game);
  }, [aiGames]);

  // Quick tags for rapid searches
  const quickTags = ['Cyberpunk', 'Elden Ring', 'GTA V', 'Sons of the Forest', 'Minecraft', 'Resident Evil'];

  // Suggestions for autocomplete list (max 6 matches, using debounced query)
  const suggestedGames = useMemo(() => {
    const q = debouncedSearchQuery.trim();
    if (!q) return [];
    
    const matches = allGames.filter(game => gameMatchesQuery(game, q));
    return matches.slice(0, 6);
  }, [debouncedSearchQuery, allGames]);

  // Handle filtering & sorting (using debounced query to keep UI buttery smooth)
  const filteredGames = useMemo(() => {
    let result = [...allGames];

    const hasSearchQuery = !!debouncedSearchQuery.trim();

    if (hasSearchQuery) {
      const q = debouncedSearchQuery.trim();
      if (searchGlobally) {
        // Search globally across all categories
        result = result.filter(game => gameMatchesQuery(game, q));
      } else {
        // Filter by category, then search within it
        if (selectedCategory !== 'vsetky') {
          result = result.filter(game => game.categories.includes(selectedCategory));
        }
        result = result.filter(game => gameMatchesQuery(game, q));
      }
    } else {
      // Category Filter only if no search query
      if (selectedCategory !== 'vsetky') {
        result = result.filter(game => game.categories.includes(selectedCategory));
      }
    }

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'popularity') {
        return b.popularity - a.popularity; // Higher popularity first
      }
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title); // Alphabetical
      }
      if (sortBy === 'releaseYear') {
        return b.releaseYear - a.releaseYear; // Newest first
      }
      return 0;
    });

    return result;
  }, [selectedCategory, debouncedSearchQuery, sortBy, searchGlobally, allGames]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white" id="root-layout">
      
      {/* Dynamic Ambient Glow Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[800px] right-10 w-[400px] h-[400px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Header bar */}
      <header className="sticky top-0 z-40 border-b border-slate-900 bg-slate-950/85 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30">
              <Gamepad2 className="h-5.5 w-5.5 text-white animate-pulse" />
            </div>
            <div>
              <span className="font-display text-lg font-black tracking-wider text-white">tobi<span className="text-cyan-400">pack</span></span>
              <span className="text-[10px] font-mono font-medium text-slate-400 block -mt-1">Exkluzívny Sťahovač Hier</span>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 border border-slate-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="h-2 w-2 rounded-full bg-emerald-500 absolute" />
              <span className="text-slate-400 ml-1 font-mono">Sťahovanie: 100% PRIAME</span>
            </div>
            <div className="hidden xs:flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 border border-slate-800">
              <Database className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
              <span className="text-slate-400 font-mono">Databáza: 5000+ hier (AI hybrid)</span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 relative z-10 flex flex-col gap-10">
        
        {/* Hero Area */}
        <section className="text-center py-6 md:py-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-400 border border-cyan-500/20"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Jednoduché, bleskové a bezpečné direct sťahovanie</span>
          </motion.div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Nájdi a stiahni si <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">PC hru</span> priamo vo vašom prehliadači
          </h1>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Vitajte v sťahovacom centre <strong className="text-white">tobipack</strong>. Vyberte si ľubovoľnú prémiovú hru z nášho zoznamu, kliknite na sťahovanie a súbor sa stiahne priamo k vám bez otravných reklám a zbytočných presmerovaní. Všetky hry sú pred-nainštalované (Pre-installed).
          </p>

          {/* Epic Main Search Bar */}
          <div className="w-full max-w-xl mt-4 relative z-50">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                placeholder="Hľadať hru (napr. Elden Ring, Cyberpunk, Witcher)..."
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/40 py-4 pl-12 pr-10 text-sm text-white placeholder-slate-500 outline-none transition-all duration-300 focus:border-cyan-500 focus:bg-slate-900/80 focus:ring-4 focus:ring-cyan-500/10"
              />
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setShowSuggestions(false);
                  }}
                  className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white"
                >
                  <X className="h-3 w-3" />
                </button>
              )}
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && searchQuery.trim() && (
              <>
                {/* Backdrop handler to close suggestions */}
                <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setShowSuggestions(false)} />
                
                {/* Autocomplete Panel */}
                <div 
                  className="absolute left-0 right-0 top-full mt-2.5 z-50 rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden divide-y divide-slate-800/60 max-h-[500px] overflow-y-auto"
                  id="autocomplete-dropdown"
                >
                  <div className="px-4 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-950/40 flex items-center justify-between">
                    <span>Našepkávač hier (tobipack)</span>
                    <span className="text-[9px] text-cyan-400 font-normal normal-case">Kliknite pre okamžité zobrazenie</span>
                  </div>
                  {suggestedGames.length > 0 ? (
                    <>
                      {suggestedGames.map((game) => (
                        <button
                          key={game.id}
                          onClick={() => {
                            setSearchQuery(game.title);
                            handleSelectGame(game);
                            setShowSuggestions(false);
                          }}
                          className="w-full flex items-center gap-3.5 px-4 py-3 text-left hover:bg-slate-800/80 active:bg-slate-800 transition-colors group cursor-pointer"
                        >
                          <img 
                            src={game.imageUrl} 
                            alt={game.title} 
                            className="h-9 w-9 rounded-lg object-cover border border-slate-800 group-hover:border-cyan-500/50 transition-colors"
                            referrerPolicy="no-referrer"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors truncate text-xs sm:text-sm">
                              {game.title}
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                              <span className="font-mono text-[10px] bg-slate-800 px-1.5 py-0.5 rounded text-slate-300">
                                {game.releaseYear}
                              </span>
                              <span>•</span>
                              <span>{game.size}</span>
                              <span>•</span>
                              <span className="text-amber-400 font-bold">★ {game.rating}</span>
                            </div>
                          </div>
                          <div className="text-xs font-semibold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity pr-1 font-mono flex items-center gap-0.5">
                            <span>Sťahovať</span>
                            <span className="text-[13px]">→</span>
                          </div>
                        </button>
                      ))}
                      <div className="px-4 py-2 bg-slate-950/30 flex items-center justify-between gap-2 text-[10px] text-slate-400 font-mono">
                        <span>Zobrazuje sa {suggestedGames.length} zhôd (5000+ hier v databáze)</span>
                        <span className="text-cyan-500/80">Kláves ESC pre zatvorenie</span>
                      </div>
                    </>
                  ) : (
                    <div className="px-4 py-6 text-center text-xs text-slate-400 flex flex-col items-center gap-1">
                      <span className="font-semibold text-slate-300">Žiadne zhody</span>
                      <span className="text-[10px] text-slate-500">Zadajte aspoň 2 písmená na vygenerovanie hry</span>
                    </div>
                  )}

                  {/* tobipack Hybrid Database Notice inside panel */}
                  <div className="p-3 bg-slate-950/85 border-t border-slate-800/60 flex items-center gap-2 text-[10px] text-slate-400">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-400 shrink-0 animate-pulse" />
                    <span>Sťahovacie centrum tobipack automaticky podporuje každú PC hru. Pre stiahnutie stačí kliknúť.</span>
                  </div>
                </div>
              </>
            )}

            {/* Global search notice and toggle button */}
            {searchQuery.trim() && selectedCategory !== 'vsetky' && (
              <div className="mt-2.5 flex items-center justify-between gap-4 text-[11px] px-3.5 py-2 rounded-xl bg-slate-900/50 border border-slate-800/80 text-slate-400">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">
                    {searchGlobally 
                      ? "Hľadá sa v celej databáze hier (globálne)" 
                      : `Hľadá sa len v kategórii: ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSearchGlobally(!searchGlobally)}
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors shrink-0 cursor-pointer hover:underline"
                >
                  {searchGlobally ? `Prepnúť na kategóriu` : "Hľadať všade"}
                </button>
              </div>
            )}

            {/* Quick Click Tags */}
            <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-500">Populárne:</span>
              {quickTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => {
                    setSearchQuery(tag);
                    setShowSuggestions(false);
                  }}
                  className="rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 px-2.5 py-1 text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Tab Bar */}
        <section className="border-y border-slate-900 py-6" id="categories-section">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400">
              <LayoutGrid className="h-4.5 w-4.5 text-cyan-400" />
              <span>Prehliadať kategórie</span>
            </h2>
            {selectedCategory !== 'vsetky' && (
              <button
                onClick={() => setSelectedCategory('vsetky')}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Resetovať filtre</span>
                <X className="h-3 w-3" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
            {CATEGORIES.map(category => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-200 cursor-pointer group hover:scale-[1.02] ${
                    isActive
                      ? `${category.bgColor} ${category.borderColor} shadow-lg shadow-cyan-500/5`
                      : 'border-slate-800 bg-slate-900/20 hover:border-slate-700 hover:bg-slate-900/50'
                  }`}
                >
                  <div className={`mb-2 rounded-lg p-1.5 transition-colors ${
                    isActive ? 'bg-slate-950/40' : 'bg-slate-950/20 group-hover:bg-slate-950/40'
                  }`}>
                    {getCategoryIcon(category.icon, `h-5 w-5 ${isActive ? category.color : 'text-slate-400 group-hover:text-slate-200'}`)}
                  </div>
                  <span className={`text-[11px] font-semibold tracking-wide ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Grid and Search results */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-900 pb-4">
            <div>
              <h2 className="text-xl font-bold text-white tracking-tight">
                {selectedCategory === 'vsetky' ? 'Všetky dostupné hry' : `${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
              </h2>
              <span className="text-xs text-slate-400 font-mono mt-0.5 block">
                Nájdených hier: {filteredGames.length}
              </span>
            </div>

            {/* Sorting controls */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-500">Zoradiť podľa:</span>
              <div className="relative inline-block">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="appearance-none rounded-xl border border-slate-800 bg-slate-900 px-4 py-2 pr-10 text-xs font-semibold text-slate-300 outline-none hover:border-cyan-500/50 hover:bg-slate-900 transition-colors cursor-pointer"
                >
                  <option value="popularity">Populárne hry</option>
                  <option value="title">Abecedy (A-Z)</option>
                  <option value="releaseYear">Najnovšie</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Game cards grid */}
          {filteredGames.length > 0 ? (
            <>
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                id="game-catalog-grid"
              >
                <AnimatePresence mode="popLayout">
                  {filteredGames.slice(0, visibleLimit).map((game) => (
                    <GameCard
                      key={game.id}
                      game={game}
                      onSelect={handleSelectGame}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredGames.length > visibleLimit && (
                <div className="flex justify-center pt-6">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit(prev => prev + 30)}
                    className="px-8 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-sm hover:border-cyan-500 hover:text-white active:bg-slate-950 transition-all shadow-md shadow-slate-950/20 cursor-pointer flex items-center gap-2 group"
                  >
                    <span>Načítať ďalšie hry</span>
                    <span className="text-xs text-slate-500 group-hover:text-cyan-400">({filteredGames.length - visibleLimit} zostáva)</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm p-10 text-center max-w-lg mx-auto flex flex-col items-center gap-5 shadow-xl shadow-cyan-950/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-950/40 border border-cyan-500/20 text-cyan-400 shadow-inner">
                <Search className="h-7 w-7 text-cyan-400" />
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-white text-xl">Žiadne hry sa nenašli</h3>
                <p className="text-sm text-slate-400 max-w-md leading-relaxed mx-auto">
                  Nenašli sa žiadne hry zodpovedajúce vášmu vyhľadávaniu v našej databáze 5000+ PC hier. Skúste zadať iný názov alebo resetujte filtre.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('vsetky');
                }}
                className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Resetovať vyhľadávanie</span>
              </button>
            </div>
          )}
        </section>

      </main>

      {/* Game Detail Modal */}
      <GameDetailModal
        game={selectedGame}
        onClose={() => setSelectedGame(null)}
      />

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950 py-10 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Branding */}
          <div className="space-y-1">
            <span className="font-display font-black tracking-wider text-white">tobi<span className="text-cyan-400">pack</span></span>
            <p className="text-slate-600 leading-relaxed max-w-sm">
              Exkluzívny slovenský direct download sťahovač hier. Sťahujte pre-installed PC hry okamžite, bez reklám a bez poplatkov.
            </p>
          </div>

          {/* Core Info */}
          <div className="max-w-md space-y-2">
            <strong className="text-slate-400 block font-semibold uppercase tracking-wider text-[10px]">O projekte tobipack</strong>
            <p className="text-slate-600 leading-relaxed text-[10px]">
              Všetky hry sú pred-nainštalované. Nie sú potrebné žiadne inštalačné programy ani zložité kroky. tobipack prináša najčistejšiu hernú skúsenosť.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1 text-slate-400 font-mono">
            <span>© 2026 tobipack. Všetky práva vyhradené.</span>
            <span className="text-cyan-400 hover:underline cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Späť na začiatok ↑
            </span>
          </div>

        </div>
      </footer>


    </div>
  );
}

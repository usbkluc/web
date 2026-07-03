import { useState } from 'react';
import { Search, Download, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';

export function CustomGameSearch() {
  const [customGame, setCustomGame] = useState('');

  const handleSearch = (site: 'steamrip' | 'fitgirl' | 'dodi') => {
    if (!customGame.trim()) return;
    const query = encodeURIComponent(customGame.trim());
    let url = '';

    switch (site) {
      case 'steamrip':
        url = `https://steamrip.com/?s=${query}`;
        break;
      case 'fitgirl':
        url = `https://fitgirl-repacks.site/?s=${query}`;
        break;
      case 'dodi':
        url = `https://dodi-repacks.site/?s=${query}`;
        break;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 md:p-8 backdrop-blur-md" id="custom-game-search">
      <div className="max-w-2xl mx-auto text-center mb-6">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Nenašli ste hru v našom katalógu?</h3>
        <p className="text-sm text-slate-400">
          Náš katalóg obsahuje najpopulárnejšie hry. Ak tu vaša vysnívaná hra chýba, zadajte jej názov nižšie a my pre vás okamžite vygenerujeme bezpečné vyhľadávacie linky pre všetky hlavné fóra!
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <div className="relative mb-6">
          <input
            type="text"
            value={customGame}
            onChange={(e) => setCustomGame(e.target.value)}
            placeholder="Zadajte ľubovoľný názov hry (napr. GTA 6, FIFA 25, Dying Light)..."
            className="w-full rounded-xl border border-slate-800 bg-slate-900/60 py-3.5 pl-11 pr-4 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200 focus:border-cyan-500 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/20"
          />
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
        </div>

        {customGame.trim() ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => handleSearch('steamrip')}
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 px-4 text-xs font-bold text-white transition-all duration-200 shadow-lg shadow-emerald-600/15 cursor-pointer"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Sťahovať z SteamRip</span>
            </button>
            <button
              onClick={() => handleSearch('fitgirl')}
              className="flex items-center justify-center gap-2 rounded-xl bg-purple-900/80 hover:bg-purple-800 py-3 px-4 text-xs font-bold text-white transition-all duration-200 border border-purple-800/60 cursor-pointer"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Hľadať na FitGirl</span>
            </button>
            <button
              onClick={() => handleSearch('dodi')}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-950/80 hover:bg-blue-900 py-3 px-4 text-xs font-bold text-slate-300 hover:text-white transition-all duration-200 border border-blue-900/40 cursor-pointer"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Hľadať na DODI</span>
            </button>
          </div>
        ) : (
          <div className="flex items-start gap-2.5 rounded-lg bg-slate-900/40 border border-slate-800/40 p-3.5 text-xs text-slate-400">
            <HelpCircle className="h-4.5 w-4.5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Tip:</strong> Pre najlepšie výsledky zadávajte názov v angličtine (napr. <code>"Need for Speed"</code> namiesto slovenských prekladov). Nepoužívajte špeciálne znaky ak to nie je nutné.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

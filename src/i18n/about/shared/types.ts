export interface AboutShared {
	headings: Record<'history' | 'specialities' | 'technology' | 'international' | 'howWeHelp' | 'prepare' | 'cityGuide', string>;
	howWeHelp: string[];
	prepare: string[];
	cityNames: Record<string, string>;
	cities: Record<string, string>;
}

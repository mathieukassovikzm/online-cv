import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type UiState = {
	isNavOpen: boolean;
	darkMode: boolean;
};

const initialState: UiState = {
	isNavOpen: false,
	darkMode: false
};

export const UiStore = signalStore(
	{ providedIn: 'root' },
	withState<UiState>(initialState),
	withMethods((store) => ({
		toggleNav(): void {
			patchState(store, { isNavOpen: !store.isNavOpen() });
		},
		closeNav(): void {
			patchState(store, { isNavOpen: false });
		},
		// setDarkMode(state, isDarkMode: boolean) {
		// 	state.darkMode = isDarkMode;
		// }
	}))
);
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type UiState = {
	isNavOpen: boolean;
	darkMode: boolean;
};

const initialState: UiState = {
	isNavOpen: false,
	darkMode: true
};

export const UiStore = signalStore(
	{ providedIn: 'root' },
	withState<UiState>(initialState),
	withMethods((
		store,
		router = inject(Router),
		route = inject(ActivatedRoute)
	) => ({

		//#region Navigation

		toggleNav(): void {
			patchState(store, { isNavOpen: !store.isNavOpen() });
		},
		closeNav(): void {
			patchState(store, { isNavOpen: false });
		},

		//#endregion

		//#region Dark Mode

		setDarkMode(isDarkMode: boolean): void {
			patchState(store, { darkMode: isDarkMode });
		},

		toggleDarkMode(): void {
			patchState(store, { darkMode: !store.darkMode() });
		},

		//#endregion
	}))
);
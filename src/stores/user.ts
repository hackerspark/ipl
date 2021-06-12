import { session } from '$app/stores';
import {readable} from 'svelte/store';

export const isLoggedIn = readable(false, function(set) {
    session.subscribe(({user})=> {
        set(!!user?.type);
    })
});
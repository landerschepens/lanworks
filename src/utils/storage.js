const KEY = "time_entries";

export const loadEntries = () =>
    JSON.parse(localStorage.getItem(KEY) || "{}");

export const saveEntries = (entries) =>
    localStorage.setItem(KEY, JSON.stringify(entries));

type TFileCategory = "all" | "photos" | "trash";

export function isFileCategory(key: string): key is TFileCategory {
    return ["all", "photos", "trash"].includes(key);
}